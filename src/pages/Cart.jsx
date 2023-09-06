import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { ItemsContext } from "../context/CartContext";
import NavBar from "../Components/NavBar/NavBar";

const Cart = () => {

    const { cart, itemsCant } = useContext(ItemsContext);

    if (itemsCant === 0) {
        return (
            <div><NavBar />
                <div>
                    <h1>No hay items en el carrito</h1>
                    <Link to='/'>Catalogo</Link>
                </div>
            </div>);
    }

    console.log(cart)
    return (
        <div>
            <NavBar />
            <div>
                {cart.map(item => <ItemDetail key={item.id}{...item} />)}
            </div>

        </div>
    );

}

export default Cart;
