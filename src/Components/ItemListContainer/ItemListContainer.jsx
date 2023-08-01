import Articulo from "../Item/Item"

const ItemListContainer = ({ greetings }) => {
    return (
        <div>
            <h1>{greetings}</h1>
            <Articulo/>
        </div>
    )
}

export default ItemListContainer