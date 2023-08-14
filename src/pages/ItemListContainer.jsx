import NavBar from "../Components/NavBar/NavBar";

function ItemListContainer() {
    return <div><NavBar />
        <ItemListContainer greetings={"Bienvenido !"} />
    </div>
};

export default ItemListContainer;