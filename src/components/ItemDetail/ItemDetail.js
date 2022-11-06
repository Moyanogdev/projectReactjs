import './ItemDetail.css'
import { CartContext } from '../../CartContext/CartContext'
import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../asyncMock'


const ItemDetail = ({ img, name, category, price, stock, description }) => {
    
    const { addItem } = useContext(CartContext);

    const onAdd = (count) => {
        const productToAdd = {
            name,
            category,
            price,
            description,
            count,
            stock
        }
        
        addItem(productToAdd);
    }
    
    
    
    
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

                        < ItemCount onAdd={onAdd} stock={stock} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ItemDetail