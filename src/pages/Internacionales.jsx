import React, { useState, useEffect } from 'react';
import NavBar from "../Components/NavBar/NavBar";
import Articulo from "../Components/Item/Item";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/client';

function Internacionales() {
    const [articulo, setArticulo] = useState([])
    useEffect(() => {

        //obtengo datos filtrados de internacional
        const q = query(collection(firestore, "Productos"), where("industria", "==", "Internacional"))
        getDocs(q).then(snapshot => {
            const articulosNacionales = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                articulosNacionales.push({ id: doc.id, ...data })
            })
            setArticulo(articulosNacionales)
        })
            .catch(error => {
                console.error("Error al recuperar productos internacionales", error);
            });
    }, [])

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <h1>INDUSTRIA INTERNACIONAL</h1>
            <div className="container my-auto">
                <div className="row g-3 justify-content-center">
                    {articulo.map(art => (
                        <div className="col-sm-6 col-lg-3 mb-3" key={art.id}>
                            <Articulo {...art} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Internacionales;
