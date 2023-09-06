import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/itemCount';
import { Button, Toast } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState } from 'react';


function Articulo({ id, imagen, descripcion, precio }) {
    // para al hacer click manejar el evento
    const [verDetalle, setVerDetalle] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [cantAgregada, setCantAgregada] = useState(0);

    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                {!verDetalle && (
                    <Button variant="dark" onClick={() => setVerDetalle(true)}>Ver detalle</Button>
                )}
                {verDetalle && <ItemDetail id={id} descripcion={descripcion} precio={precio} />}
                <ItemCount onAdd={(contador) => {
                    setShowToast(true);
                    setCantAgregada(contador);
                }} />
            </Card.Body>
            <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                autohide
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <Toast.Header>
                    <strong className="me-auto">Notificación</strong>
                </Toast.Header>
                <Toast.Body>Has agregado {cantAgregada} unidades al carrito</Toast.Body>
            </Toast>


        </Card >
    );
}

export default Articulo;