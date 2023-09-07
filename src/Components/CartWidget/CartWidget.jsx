import { useContext } from 'react'
import '../../assets/CartWidget.css'
import cart from './assets/cart.svg'
import { ItemsContext } from '../../context/CartContext'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const CartContext = useContext(ItemsContext)
    return (
        <Link to="/carrito" style={{display: CartContext.itemsCant >0 ?'block': 'none'}}>
        <div>
            <img src={cart} alt="cart-widget" id="cart-widget" />
            <Badge bg="white" text="dark">{CartContext.itemsCant}</Badge>
        </div>
    </Link>
    );
}

export default CartWidget