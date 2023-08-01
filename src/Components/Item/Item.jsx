import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { listaProductos } from '../AsyncMock/AsyncMock';
import { useEffect, useState } from 'react';

function Articulo() {

    //creo variable y luego el set para modificar esa variable
    const [articulos, setArticulos] = useState([]);
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    useEffect(() => {
        // traigo los datos de listaProductos haciendo fetch
        const fetchArticulos = async () => {
            const result = await listaProductos();
            setArticulos(result);
        }
        fetchArticulos();

    }, []);

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