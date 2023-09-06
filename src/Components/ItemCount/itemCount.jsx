import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/CartContext";


function ItemCount({id, imagen, descripcion, precio, onAdd }) {
    const CartContext = useContext(ItemsContext);
    const [contador, setContador] = useState(0);


    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        CartContext.sumarItemCant(contador);
        onAdd({
            id,
            imagen,
            descripcion,
            precio,
            cantidad: contador
        });
    }


    return (
        <>
            <div className="d-flex justify-content-center">
                <Button variant="dark" onClick={restar} >-</Button>
                <h6 className="d-flex align-items-center mx-2">{contador} </h6>
                <Button variant="dark" onClick={sumar}>+</Button>
            </div>
            <Button variant="dark" className='my-2' onClick={agregarAlCarrito}>Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;
