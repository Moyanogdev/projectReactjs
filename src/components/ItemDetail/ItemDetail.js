import './ItemDetail.css'
import { CartContext } from '../../CartContext/CartContext'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartWidget from '../CartWidget/CartWidget'
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

const ItemDetail = ({ id, img, name, category, price, stock, description }) => {
    
    const { addItem, inCart, getProductQuantity} = useContext(CartContext);  
   
    
    const onAdd = (count) => {
        const productToAdd = {
            id,
            name,
            category,
            price,
            description,
            count,
            stock, 
            img
        }        
        addItem(productToAdd);           
    }
    
    const quantityAdded = getProductQuantity(id)
    
    
    return (
        <div className="center row row-cols-1 row-cols-md-4 g-1">
            <div className="col">
                <div className="card h-100">
                    <img className="img card-img-top" src={img} alt={name} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6>Categoría: {category}</h6>
                        <p className="card-text">Descripción: {description}</p>
                        <p className="card-text">Precio: ${price}</p>
                        <p className="card-text">Stock: {stock}</p>

                        {stock !==0 ? < ItemCount onAdd={onAdd} stock={stock} initial={quantityAdded} category={category} />
                        :<h3> PRODUCTO FUERA DE STOCK </h3>}
                        {inCart(id) && <Link to= '/Cart' className='linkFinalizar'> FINALIZAR COMPRA </Link> }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ItemDetail