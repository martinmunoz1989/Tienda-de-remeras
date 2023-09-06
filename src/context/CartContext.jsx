import { createContext, useState } from "react";

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

    //agrega al listado de items

    const addItem = (agregarItem) => {
        setCart([...cart, agregarItem]);
        sumarItemCant();
    }

    const removeItem = (itemId) => {
        const newItems = cart.filter(item => item.id !== itemId);
        setCart(newItems);
        restarItemCant();
    }

    //incrementa item + 1
    const sumarItemCant = (cantidad = 1) => {
        setItemsCant(prevItemsCant => prevItemsCant + cantidad);
    };

    const restarItemCant = () => {
        if (itemsCant > 0) {
            setItemsCant(itemsCant - 1);
        }
    };

    return <ItemsContext.Provider
        value={{
            cart: cart,
            itemsCant: itemsCant,
            addItem: addItem,
            removeItem: removeItem,
            sumarItemCant: sumarItemCant,
            restarItemCant: restarItemCant,

        }}>
        {children}
    </ItemsContext.Provider>
}

export default ItemsProvider