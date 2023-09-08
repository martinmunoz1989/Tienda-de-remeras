import { useContext, useEffect, useState } from 'react';
import { obtenerURLImagen } from '../../firebase/client.jsx'; // Ajusta la ruta según tu estructura de archivos.
import { ItemsContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ItemCount from '../ItemCount/itemCount';
import ItemDetail from '../ItemDetail/ItemDetail';

function Articulo({ id, imagen, descripcion, precio, stock }) {
    const [verDetalle, setVerDetalle] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [cantAgregada, setCantAgregada] = useState(0);
    const [urlImagen, setUrlImagen] = useState(null);

    const CartContext = useContext(ItemsContext);

    const toggleDetalle = () => {
        setVerDetalle(!verDetalle);
    };

    useEffect(() => {
        async function traerImagen() {
            try {
                const url = await obtenerURLImagen(`${imagen}`);
                setUrlImagen(url);
            } catch (error) {
                console.error("Error al traer la imagen:", error);
            }
        }

        traerImagen();
    }, [imagen]);

    const imagenPlaceholder = 'URL_de_tu_imagen_predeterminada.jpg'; // Reemplaza esto con la URL de tu imagen predeterminada.

    return (
        <Card key={id} style={{ width: '288px', height: '450px' }}>
            <Card.Img variant="top" src={urlImagen || imagenPlaceholder} style={{ maxHeight: '60%' }} />
            <Card.Body>
                {!verDetalle ? (
                    <Button variant="dark" onClick={toggleDetalle}>
                        Ver detalle
                    </Button>
                ) : (
                    <ItemDetail
                        id={id}
                        descripcion={descripcion}
                        precio={precio}
                        stock={stock}
                        onClose={toggleDetalle}
                    />
                )}
                <ItemCount
                    id={id}
                    imagen={urlImagen || imagenPlaceholder} // Usar la URL de la imagen o imagen predeterminada
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
                    transform: 'translateX(-50%)',
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
