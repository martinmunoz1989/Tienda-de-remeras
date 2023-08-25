import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Nacionales from './pages/Nacionales.jsx'
import Internacionales from './pages/Internacionales.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import { ItemsContext } from './context/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemsContext.Provider value={[]}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/Home" element={<App />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/Carrito" element={<Cart />} />
          <Route exact path="/Nacionales" element={<Nacionales />} />
          <Route exact path="/Internacionales" element={<Internacionales />} />
          {/* <Route exact path="/Contacto" element={<Contacto/>}/> */}
        </Routes>
      </BrowserRouter>
    </ItemsContext.Provider>
  </React.StrictMode>,
);
