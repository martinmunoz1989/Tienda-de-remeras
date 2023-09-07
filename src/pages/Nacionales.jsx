import React, { useState, useEffect } from 'react';
import NavBar from "../Components/NavBar/NavBar";
import { listaProductosNacionales } from "../Components/AsyncMock/asyncMock";
import Articulo from "../Components/Item/Item";


function Nacionales() {
    const [articulo, setArticulo] = useState([])
    useEffect(() => {
        listaProductosNacionales()
            .then(response => {
                setArticulo(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <h1>INDUSTRIA NACIONAL</h1>
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

export default Nacionales;