import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { listaProductos } from '../AsyncMock/asyncMock';
import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/itemCount';

function Articulo() {

    //creo variable y luego el set para modificar esa variable
    const [articulos, setArticulos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    //const [contador, setContador] = useState(0);

    useEffect(() => {
        listaProductos()
            .then(result => {
                setArticulos(result);
            })
            .catch(() => {
                setError("No pudimos cargar los articulos");
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);

    if (loading) {
        return <h1>Cargando el catalogo de productos !</h1>
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="d-flex flex-row flex-wrap">
            {articulos.map(articulo => (
                <Card key={articulo.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={articulo.imagen} />
                    <Card.Body>
                        <Card.Title>{articulo.nombre}</Card.Title>
                        <Card.Text>{articulo.precio}</Card.Text>
                        <ItemCount />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Articulo;