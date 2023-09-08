import { Button } from "react-bootstrap";
import { useState } from "react";

function ItemCount({ id, imagen, descripcion, precio, stock, onAdd }) {
    const [contador, setContador] = useState(0);


    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        onAdd({
            id,
            imagen,
            descripcion,
            precio,
            stock,
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
