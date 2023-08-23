import { useContext } from 'react'
import '../../assets/CartWidget.css'
import cart from './assets/cart.svg'
import { ItemsContext } from '../../context/CartContext'
import { Badge } from 'react-bootstrap'
const CartWidget = () => {
    const CartContext = useContext(ItemsContext)

    console.log({ CartContext });
    return <div>
        <img src={cart} alt="cart-widget" id="cart-widget" />
        <Badge>3</Badge>
        
    </div>
}

export default CartWidget