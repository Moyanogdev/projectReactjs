import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Fragment>
      <BrowserRouter> 
      {/* Orden según ruta de nav.*/}
        <NavBar />

        <Routes>
          {}
          < Route path='/' element={<ItemListContainer />} />
          < Route path='/category/:categoryId' element={<ItemListContainer />} />
          < Route path='/item/:productId' element={<ItemDetailContainer />} />
          < Route path='*' element={<h1>404 NO ENCONTRAMOS LO QUE ESTÁS BUSCANDO</h1>} />
        </Routes>

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
