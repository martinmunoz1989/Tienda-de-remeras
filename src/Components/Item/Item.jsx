import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/itemCount';
import { Button } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState } from 'react';

function Articulo({ id, imagen, descripcion, precio }) {
    // para al hacer click manejar el evento
    const [verDetalle, setVerDetalle] = useState(false)

    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                {!verDetalle && (
                    <Button variant="dark" onClick={() => setVerDetalle(true)}>Ver detalle</Button>
                )}
                {verDetalle && <ItemDetail id={id} descripcion={descripcion} precio={precio}  />}
                <ItemCount onAdd={(contador) => alert("Has agregado " + contador + " unidades al carrito")} />
            </Card.Body>
        </Card>
    );
}

export default Articulo;