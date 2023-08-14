import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { listaProductos } from '../AsyncMock/asyncMock';
import { useEffect, useState } from 'react';

function Articulo() {

    //creo variable y luego el set para modificar esa variable
    const [articulos, setArticulos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0);

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

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }


    return articulos.map(articulo => (
        <Card key={articulo.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={articulo.imagen} />
            <Card.Body>
                <Card.Title>{articulo.nombre}</Card.Title>
                <Card.Text>{articulo.precio}</Card.Text>
                <div className="d-flex justify-content-center">
                    <Button variant="dark" onClick={restar} >-</Button>
                    <h6 className="d-flex align-items-center mx-2">{contador} </h6>
                    <Button variant="dark" onClick={sumar}>+</Button>
                </div>
                <Button variant="dark" className='my-2' >Agregar al carrito</Button>
            </Card.Body>
        </Card>
    ));
}

export default Articulo;