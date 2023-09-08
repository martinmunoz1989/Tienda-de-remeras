import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemDetail({ id, descripcion, precio, stock, onClose, showCloseButton = true }) {

    return (
        <div>
            <Card key={id} style={{ position: 'relative' }}>
                {showCloseButton && (
                    <Button
                        variant="link"
                        className="position-absolute text-danger bg-dark rounded"
                        style={{
                            right: '5px',
                            top: '5px',
                            zIndex: 1,
                            fontSize: '20px',
                            padding: '0.25rem 0.5rem',
                            textDecoration: 'none',
                        }}
                        onClick={onClose}
                    >
                        x
                    </Button>
                )}
                <Card.Body>
                    <Card.Title>{descripcion}</Card.Title>
                    <Card.Text>
                        Precio: ${precio}
                    </Card.Text>
                    <Card.Text>
                        Stock: {stock}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemDetail;
``
