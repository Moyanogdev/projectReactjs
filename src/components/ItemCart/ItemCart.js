import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext' 
import './ItemCart.css'


const ItemCart = ({ id, name, quantity, price, img }) => {
    const { removeItem } = useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }
return (    
    <div className="container cardCart py-5 mb-5">
        <div className='row'>
            <h2>{name}</h2> 
            <div className='justify-content-center px-0'>
                <p>Precio del producto: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${quantity * price}</p>
                <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Eliminar</button>
            </div>
        </div>
    </div>
)
}

export default ItemCart