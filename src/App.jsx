import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { firestore } from './firebase/client';


function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greetings={"Bienvenido a FootShirts Store!"} />
    </div>
  )
}

export default App
