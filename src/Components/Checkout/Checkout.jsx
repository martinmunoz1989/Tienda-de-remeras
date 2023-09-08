import { useState, useContext } from 'react';
import { ItemsContext } from '../../context/CartContext';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');
    const { clearCart, purchaseCart } = useContext(ItemsContext);

    const handleClickOrderConfirmation = async (buyer) => {
        try {
            const realOrderId = await purchaseCart(buyer);
            setOrderId(realOrderId);
            clearCart();
        } catch (error) {
            console.error("Hubo un error al guardar la orden:", error);
        }
    };

    if (orderId) {
        return (
            <>
                <NavBar />
                <h1>El código de seguimiento de su orden es: {orderId}</h1>
                <Link to='/'>
                    <Button variant="dark">Regresar al Catalogo</Button>
                </Link>
            </>
        );
    }

    return (
        <div>
            <NavBar />
            <h1>Completa los datos para finalizar la compra</h1>
            <CheckoutForm onConfirm={handleClickOrderConfirmation} />
        </div>
    );
}

export default Checkout;
