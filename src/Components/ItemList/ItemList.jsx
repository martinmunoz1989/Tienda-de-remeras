import Articulo from "../Item/Item"

const ItemList = ({ articulos }) => {
    return (
        < div >
            {articulos.map(articulo => <Articulo key={articulo.id} {...articulo} />)}
        </div >
    )

}

export default ItemList