import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <CartProvider>
      <BrowserRouter> 
        <NavBar />
        <Routes>
          < Route path='/' element={<ItemListContainer />} />
          < Route path='/category/:categoryId' element={<ItemListContainer />} />
          < Route path='/item/:productId' element={<ItemDetailContainer />} />
          < Route path='*' element={<h1>404 NO ENCONTRAMOS LO QUE ESTÁS BUSCANDO</h1>} />
          < Route path='/cart' element={<Cart />} />
          < Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer/>

      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
