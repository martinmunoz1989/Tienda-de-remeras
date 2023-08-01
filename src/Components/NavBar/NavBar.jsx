import CartWidget from "../CartWidget/CartWidget.jsx";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBarcss from '../../assets/NavBar.css'


const NavBar = () => {
    return (
        <>
            <h1>Tienda de Camisetas de Futbol</h1>
            <Navbar bg="dark" data-bs-theme="dark" id="NavBar">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#Nacionales">Nacionales</Nav.Link>
                        <Nav.Link href="#Internacionales">Internacionales</Nav.Link>
                        <Nav.Link href="#Contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
                <CartWidget />
            </Navbar>

        </>
    );
}

export default NavBar;



