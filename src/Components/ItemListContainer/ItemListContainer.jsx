import ItemList from "../ItemList/ItemList";
import { listaProductos } from '../AsyncMock/asyncMock';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greetings }) => {
    const [articulos, setArticulos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
        <div>
            <h1>{greetings}</h1>
            <ItemList articulos={articulos} />
        </div>
    )
}

export default ItemListContainer