import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greetings={"Bienvenido a FootShirts Store!"} />
    </div>
  )
}

export default App
