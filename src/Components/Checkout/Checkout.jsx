import { useState, useContext } from 'react';
import { ItemsContext } from '../../context/CartContext';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../Checkout/Checkout.css'
import '../../styles/styles.css'

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
                <div className="checkout">
                    <h1 className='title-style no-border'>El código de seguimiento de su orden es: {orderId}</h1>
                    <h2>¡Gracias por su compra!</h2>
                    <Link to='/'>
                        <Button variant="dark">Regresar al Catálogo</Button>
                    </Link>
                </div>
            </>
        );
        
        
    }

    return (
        <div>
            <NavBar />
            <h1 className='title-style no-border roboto-font'>Completa los datos para finalizar la compra</h1>
            <CheckoutForm onConfirm={handleClickOrderConfirmation} />
        </div>
    );
}

export default Checkout;
