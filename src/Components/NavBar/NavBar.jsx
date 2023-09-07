import CartWidget from "../CartWidget/CartWidget.jsx";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../assets/NavBar.css'
import pelota from "../../images/pelota.jpg"
import "../NavBar/NavBar.css"

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" id="NavBar">
                <Container>
                    <Link to="/">
                        <img
                            src={pelota}
                            alt="Logo"
                            className="navbar-logo"
                        />
                    </Link>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Nacionales">Nacionales</Nav.Link>
                        <Nav.Link as={Link} to="/Internacionales">Internacionales</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    );
}

export default NavBar;
