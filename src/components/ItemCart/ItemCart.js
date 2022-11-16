import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import './ItemCart.css';


const ItemCart = ({  id, name,  price, count, img}) => {
    const { removeItem } = useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }
    const mensajeToast = () => {
        Toastify({
            text: "Producto eliminado",
            duration: 3000,
            gravity: "top",
            position: "right",
            style:{
                background:"red",
                fontSize:"15px"
            },
        }).showToast();
    } 
    return (    
        <div className="container cardCart py-5 mb-5">
            <div className='row justify-content-center align-items-center'>
                <h2>{name}</h2> 
                <div className='justify-content-center px-0'>
                    <img className="img" src={img} alt={id} />
                    <p>Precio del producto: ${price}</p>
                    <p>Cantidad: {count}</p>
                    <p>Subtotal: ${count * price}</p>
                    <button className='ButtonCartItem' onClick={() => {handleRemove(id); mensajeToast()}}>Eliminar</button>
                </div>
            </div>
        </div>
)
}

export default ItemCart