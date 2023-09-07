import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { ItemsContext } from "../../context/CartContext";
import NavBar from "../NavBar/NavBar";
import { Button} from "react-bootstrap";
import "../Cart/Cart.css"

const Cart = () => {

    const { cart, itemsCant, clearCart, removeItem } = useContext(ItemsContext);

    if (itemsCant === 0) {
        return (
            <div><NavBar />
                <div>
                    <h1>No hay items en el carrito</h1>
                    <Link to='/'>
                        <Button variant="dark">Regresar al Catalogo</Button>
                        </Link>
                </div>
            </div>);
    }

    const totalPrecio = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    return (
        <div>
            <NavBar />
            <div>
                {cart.map(item => (
                    <div key={item.id} className="d-flex align-items-center justify-content-center mb-3">
                        <ItemDetail {...item} className="button-spacing mr-3" />
                        <p className="mr-3">Cantidad: {item.cantidad}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                ))}
                {itemsCant > 0 ? (
                    <h3><strong>TOTAL: ${totalPrecio}</strong></h3>
                ) : (
                    <h1>No hay items en el carrito</h1>
                )}

                <div className="d-flex justify-content-center my-3">
                    <Button onClick={() => clearCart()} className="button-spacing mr-2" variant="dark">Vaciar Carrito</Button>
                    <Link className="btn btn-dark" bg="black" to="/Checkout">Checkout</Link>
                </div>
            </div>
        </div>
    );


}

export default Cart;
