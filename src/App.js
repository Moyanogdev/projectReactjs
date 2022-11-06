import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './CartContext/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
      <CartProvider>
      <BrowserRouter> 
      {}
        <NavBar />

        <Routes>
          {}
          < Route path='/' element={<ItemListContainer />} />
          < Route path='/category/:categoryId' element={<ItemListContainer />} />
          < Route path='/item/:productId' element={<ItemDetailContainer />} />
          < Route path='*' element={<h1>404 NO ENCONTRAMOS LO QUE ESTÁS BUSCANDO</h1>} />
          < Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
