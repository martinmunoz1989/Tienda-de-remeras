import Articulo from "../Item/Item"

const ItemList = ({ articulos }) => {
    return (
        < div className="d-flex flex-row flex-wrap">
            {articulos.map(articulo => <Articulo key={articulo.id} {...articulo} />)}
        </div >
    )

}

export default ItemList