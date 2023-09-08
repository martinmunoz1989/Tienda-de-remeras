import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { firestore } from './firebase/client';


function App() {
  useEffect(() => {

    //obtengo datos filtrados de la collection 
    const q = query(collection(firestore, "Productos"), where("industria", "==", "Nacional"))
    getDocs(q).then(snapshot => {
      console.log(snapshot);
      snapshot.forEach((doc) => console.log(doc.data()))
    });

    const y = query(collection(firestore, "Productos"), where("industria", "==", "Internacional"))
    getDocs(y).then(snapshot => {
      console.log(snapshot);
      snapshot.forEach((doc) => console.log(doc.data()))
    });



  }, []);


  // obtengo la coleccion de FIRESTORE 
  /* 
   useEffect(() => {const collectionRef = collection(firestore, "Productos")
   getDocs(collectionRef).then(snapshot => {
     console.log(snapshot);
     snapshot.forEach((doc) => console.log(doc.data()));
   })
     .catch((error) => console.log(error))
     .finally(() => { });

 }, []);*/

  // obtengo UN SOLO DOC DE FIRESTORE

  /*const docRef = doc(firestore, "Productos", "7bTJLwGQ5iCpIbSQwKOk")
  getDoc(docRef).then((snapshot) => {
    console.log({ snapshot });
    if (snapshot.exists()) {
      console.log("la info del doc es", snapshot.data())
    } else {
      console.log("no existe")
    }

  });


}, []);*/

  return (
    <div>
      <NavBar />
      <ItemListContainer greetings={"Bienvenido a FootShirts Store!"} />
    </div>
  )
}

export default App
