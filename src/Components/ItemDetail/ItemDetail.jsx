import Card from 'react-bootstrap/Card';

function ItemDetail({ id, descripcion, precio, className }) {
    return (
        <div className={className}>
            <Card key={id}>
                <Card.Body>
                    <Card.Title>{descripcion}</Card.Title>
                    <Card.Text>${precio}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemDetail;
