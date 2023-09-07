import { useState, useContext } from 'react'
import { ItemsContext } from '../../context/CartContext'
import CheckoutForm from '../CheckoutForm/Checkoutform'
import NavBar from '../NavBar/NavBar'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(ItemsContext)

    const createOrder = ({ name, phone, email }) => {
        // Simplemente imprimimos los datos para visualizarlos. 
        // Puedes hacer cualquier otra lógica que necesites con estos datos.
        console.log('Datos del formulario:', { name, phone, email, cart, total });

        // Por simplicidad, generamos un ID de orden aleatorio.
        const generatedOrderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
        setOrderId(generatedOrderId);

        clearCart();  // Si deseas limpiar el carrito después de crear la orden.
    }

    if (orderId) {
        return <>
            <NavBar />
            <h1>El código de seguimiento de su orden es: {orderId}</h1>
        </>
    }

    return (
        <div>
            <NavBar />
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;
