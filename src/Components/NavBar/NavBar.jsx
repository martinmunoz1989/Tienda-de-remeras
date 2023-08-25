import CartWidget from "../CartWidget/CartWidget.jsx";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../assets/NavBar.css'



const NavBar = () => {
    return (
        <>
            <h1>Tienda de Camisetas de Futbol</h1>
            <Navbar bg="dark" data-bs-theme="dark" id="NavBar">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Nacionales">Nacionales</Nav.Link>
                        <Nav.Link as={Link} to="/Internacionales">Internacionales</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
                <Nav.Link as={Link} to="/Carrito">{<CartWidget />}</Nav.Link>

            </Navbar>

        </>
    );
}

export default NavBar;



