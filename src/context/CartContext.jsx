import { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/client";

export const ItemsContext = createContext({
    cart: [],
    itemsCant: 0,
    sumarItemCant: () => { },
    restarItemCant: () => { }
});

//se crea custom provider
function ItemsProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [itemsCant, setItemsCant] = useState(0);
    const [order, setOrder] = useState({})

    //agrega al listado de items

    const addItem = (agregarItem) => {
        // Buscar el ítem en el carrito para no agregarlo de nuevo al cart
        const itemExistente = cart.find(item => item.id === agregarItem.id);

        // Si el ítem ya existe en el carrito
        if (itemExistente) {
            // Actualiza el carrito con la nueva cantidad para ese ítem
            const newCart = cart.map(item =>
                item.id === agregarItem.id
                    ? { ...item, cantidad: item.cantidad + agregarItem.cantidad }
                    : item
            );
            setCart(newCart);
        } else {
            // Si el ítem no está en el carrito, simplemente lo añade
            setCart([...cart, agregarItem]);
        }

        // Actualiza el contador total de ítems en el carrito
        sumarItemCant(agregarItem.cantidad);
    }


    const removeItem = (itemId) => {
        const itemAEliminar = cart.find(item => item.id === itemId);
        const newItems = cart.filter(item => item.id !== itemId);
        setCart(newItems);

        if (itemAEliminar) {
            restarItemCant(itemAEliminar.cantidad);
        }
    }


    //incrementa item + 1
    const sumarItemCant = (cantidad = 1) => {
        setItemsCant(prevItemsCant => prevItemsCant + cantidad);
    };

    const restarItemCant = (cantidad = 1) => {
        setItemsCant(prevItemsCant => prevItemsCant - cantidad);
    };


    const clearCart = () => {
        setCart([]);         // Vacío el carrito
        setItemsCant(0);     // Reseteo el contador de items
    };

    const purchaseCart = async (buyer) => {
        const itemsData = cart.map(item => ({
            id: item.id,
            descripcion: item.descripcion,
            precio: item.precio,
        }));
    
        const totalValue = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    
        const orderData = {
            buyer,
            items: itemsData,
            total: totalValue,
        };
    
        const ordersRef = collection(firestore, "Orders");
    
        const docRef = await addDoc(ordersRef, orderData);
        return docRef.id;  // Trae el ID del documento creado en Firestore
    }
    

    return <ItemsContext.Provider
        value={{
            cart: cart,
            itemsCant: itemsCant,
            addItem: addItem,
            removeItem: removeItem,
            sumarItemCant: sumarItemCant,
            restarItemCant: restarItemCant,
            clearCart: clearCart,
            purchaseCart: purchaseCart,
        }}>
        {children}
    </ItemsContext.Provider>
}

export default ItemsProvider