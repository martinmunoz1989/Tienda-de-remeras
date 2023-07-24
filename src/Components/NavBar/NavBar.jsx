import CartWidget from "../CartWidget/CartWidget.jsx";
import Button from 'react-bootstrap/Button';
const NavBar = () => {
    return (
        <nav>
            <h1>Tienda de Camisetas de Futbol</h1>
            <div>
                <Button variant="primary" className="me-2">Liga Argentina</Button>
                <Button variant="primary"className="me-2">Sudamerica</Button>
                <Button variant="primary"className="me-2">Europa</Button>
                <Button variant="primary"className="me-2">Contacto</Button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;