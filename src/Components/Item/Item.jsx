import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ItemCount from '../ItemCount/itemCount';
import { useContext, useState } from 'react';
import { ItemsContext } from '../../context/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail'

function Articulo({ id, imagen, descripcion, precio, stock }) {
    const [verDetalle, setVerDetalle] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [cantAgregada, setCantAgregada] = useState(0);

    const CartContext = useContext(ItemsContext);

    const toggleDetalle = () => {
        setVerDetalle(!verDetalle);
    };

    return (
        <Card key={id} style={{ width: '288px', height: '450px' }}>
            <Card.Img variant="top" src={imagen} style={{ maxHeight: '60%' }} />
            <Card.Body>
                {!verDetalle ?
                    <Button variant="dark" onClick={toggleDetalle}>Ver detalle</Button> :
                    <ItemDetail
                        id={id}
                        descripcion={descripcion}
                        precio={precio}
                        stock={stock}
                        onClose={toggleDetalle}
                    />
                }
                <ItemCount
                    id={id}
                    imagen={imagen}
                    descripcion={descripcion}
                    precio={precio}
                    stock={stock}
                    onAdd={(cantAgregada) => {
                        setShowToast(true);
                        setCantAgregada(cantAgregada.cantidad);
                        CartContext.addItem(cantAgregada);
                    }}
                />
            </Card.Body>
            <Toast
                onClose={() => setShowToast(false)}
                show={showToast && cantAgregada > 0}
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
                {cantAgregada > 0 && (
                    <Toast.Body>Has agregado {cantAgregada} unidades al carrito</Toast.Body>
                )}
            </Toast>
        </Card>
    );
}

export default Articulo;
