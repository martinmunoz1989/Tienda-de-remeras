import { useEffect, useState } from "react"
import { listaProductosById } from "../AsyncMock/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [articulo, setArticulo] = useState(null)
    useEffect(() => {
        listaProductosById('1')
            .then(response => {
                setArticulo(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        // se corrobora que articulo tenga valor
        <div>
            {articulo && <ItemDetail {...articulo} />}
        </div>
    )
}

export default ItemDetailContainer