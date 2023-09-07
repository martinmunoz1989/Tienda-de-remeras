import Articulo from "../Item/Item";


const ItemList = ({ articulos }) => {
    return (
        <div className="row g-3 mx-auto">
            <div className="row g-3 mx-auto">
                {articulos.map(articulo => (
                    <div className="col-sm-6 col-lg-3 mb-3 d-flex justify-content-center" key={articulo.id}>
                        <div className="h-100">
                            <Articulo {...articulo} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ItemList;
