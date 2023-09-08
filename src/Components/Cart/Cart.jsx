import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { ItemsContext } from "../../context/CartContext";
import NavBar from "../NavBar/NavBar";
import { Button } from "react-bootstrap";
import "../../styles/styles.css"

const Cart = () => {

    const { cart, itemsCant, clearCart, removeItem } = useContext(ItemsContext);

    if (itemsCant === 0) {
        return (
            <div><NavBar />
                <div>
                    <h1 className="title-style no-border">No hay items en el carrito</h1>
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
            <div className="container-fluid">
                <h2 className="title-style">DETALLE DEL PEDIDO</h2>
                {cart.map(item => (
                    <div key={item.id} className="d-flex align-items-center justify-content-center mb-3 item-detail-background">
                        <div className="flex-grow-1 mr-3">
                            <ItemDetail {...item} verStock={false} showCloseButton={false} className="button-spacing w-100" />
                        </div>
                        <div className="mr-3 cantidad-style">
                            <p>Cantidad: {item.cantidad}</p>
                        </div>
                        <div style={{ marginTop: '-10px' }}>
                            <Button className="btn btn-dark" bg="black" onClick={() => removeItem(item.id)}>Eliminar</Button>
                        </div>
                    </div>
                ))}
                {itemsCant > 0 ? (
                    <h3><strong>TOTAL: ${totalPrecio}</strong></h3>
                ) : (
                    <h1>No hay items en el carrito</h1>
                )}

                <div className="d-flex justify-content-center my-3">
                    <Button onClick={() => clearCart()} className="button-spacing mr-2" variant="dark">Vaciar Carrito</Button>
                    <Link className="btn btn-dark" bg="black" to="/Checkout">Finalizar compra</Link>
                </div>
            </div>
        </div>
    );



}

export default Cart;
