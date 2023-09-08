import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from "../../firebase/client";
import Loader from "../Loader";
import '../Cart/cart.css'
import '../../styles/styles.css'

const ItemListContainer = ({ greetings }) => {
    const [articulos, setArticulos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        //obtengo toda la collection de firestore  

        const collectionRef = collection(firestore, "Productos");
        getDocs(collectionRef).then(snapshot => {
            const itemsArray = [];
            snapshot.forEach((doc) => {
                const itemData = doc.data();
                itemsArray.push({
                    id: doc.id,
                    ...itemData
                });
            });
            setArticulos(itemsArray);
        })
            .catch(() => setError("No pudimos cargar los articulos"))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <>
            <Loader />
        </>
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h1 className="title-style no-border roboto-font">{greetings}</h1>
            <ItemList articulos={articulos} />
        </div>
    )
}

export default ItemListContainer