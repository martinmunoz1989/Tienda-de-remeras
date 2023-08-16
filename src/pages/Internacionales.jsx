import React, { useState, useEffect } from 'react';
import NavBar from "../Components/NavBar/NavBar";
import { listaProductosInternacionales } from "../Components/AsyncMock/asyncMock";
import Articulo from "../Components/Item/Item";


function Internacionales() {
    const [articulo, setArticulo] = useState([])
    useEffect(() => {
        listaProductosInternacionales()
            .then(response => {
                setArticulo(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <div>
            <NavBar />
            <div>
                {articulo.map(art => (
                    <Articulo key={art.id} {...art} />
                ))}
            </div>
        </div>
    )
}

export default Internacionales;