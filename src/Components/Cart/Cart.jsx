import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { ItemsContext } from "../../context/CartContext";
import NavBar from "../NavBar/NavBar";
import { Button } from "react-bootstrap";
import "../Cart/cart.css"

const Cart = () => {

    const { cart, itemsCant, clearCart, } = useContext(ItemsContext);

    if (itemsCant === 0) {
        return (
            <div><NavBar />
                <div>
                    <h1>No hay items en el carrito</h1>
                    <Link to='/'>Regresar al Catalogo</Link>
                </div>
            </div>);
    }

    const totalPrecio = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    return (
        <div>
            <NavBar />
            <div>
                {cart.map(item => (
                    <div key={item.id} className="d-flex align-items-center justify-content-center  mb-3">
                        <ItemDetail {...item} className="button-spacing mr-3" />
                        <p className="mr-3">Cantidad: {item.cantidad}</p>
                    </div>
                ))}
                <h3>TOTAL: ${totalPrecio}</h3>
                <div className="d-flex justify-content-center my-3">
                    <Button onClick={() => clearCart()} className="button-spacing mr-2" variant="dark">Vaciar Carrito</Button>
                    <Link className="btn btn-dark" bg="black" to="/Checkout">Checkout</Link>
                </div>
            </div>
        </div>
    );

}

export default Cart;
