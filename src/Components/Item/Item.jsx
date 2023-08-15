import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/itemCount';

function Articulo({ id, imagen, nombre, precio }) {

    return (
        <div className="d-flex flex-row flex-wrap">
            <Card key={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{precio}</Card.Text>
                    <ItemCount onAdd={(contador) => alert("Has agregado " + contador + " unidades al carrito")} />
                </Card.Body>
            </Card>

        </div>
    );
}

export default Articulo;