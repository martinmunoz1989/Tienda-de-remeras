import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { ItemsContext } from "../../context/CartContext";
import NavBar from "../NavBar/NavBar";
import { Button } from "react-bootstrap";

const Cart = () => {

    const { cart, itemsCant, clearCart } = useContext(ItemsContext);

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
                    <div key={item.id}>
                        <ItemDetail {...item} />
                        <p>Cantidad: {item.cantidad}</p>
                    </div>
                ))}
                <div>
                    <h3>Total:${totalPrecio}</h3>
                    <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
                </div>
                <div>
                    <Link className="btn btn-primary" to="/Checkout">Checkout</Link>
                </div>
            </div>

        </div>
    );

}

export default Cart;
