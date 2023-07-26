import CartWidget from "../CartWidget/CartWidget.jsx";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <>
            <h1>Tienda de Camisetas de Futbol</h1>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#Argentina">Nacionales</Nav.Link>
                        <Nav.Link href="#Europa">Internacionales</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <CartWidget />
        </>
    );
}

export default NavBar;

/* return (
     <nav>
         <h1>Tienda de Camisetas de Futbol</h1>
         <div>
             <Button variant="primary" className="me-2">Liga Argentina</Button>
             <Button variant="primary" className="me-2">Sudamerica</Button>
             <Button variant="primary" className="me-2">Europa</Button>
             <Button variant="primary" className="me-2">Contacto</Button>
         </div>
         <CartWidget />
     </nav>
 )*/


