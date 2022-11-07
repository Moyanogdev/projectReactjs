import cart from './assets/cart.png'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { quantityTotal } = useContext (CartContext);
    return (
        <div className='cartStyle'>
            <Link to='/Cart'><img className= 'cartImg' src={cart} alt='cart'/></Link>
            <div className='cartMargin'>
                <h4> Agregado: { quantityTotal }</h4>
                <h4> Total: {quantityTotal}</h4>
            </div>
        </div>
    )
}

export default CartWidget