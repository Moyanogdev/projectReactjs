import cart from './assets/cart.png'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return (
        <div className='cartStyle text-center'>
            <Link to='/Cart'><img className= 'cartImg' src={cart} alt='cart'/></Link>
        </div>
    )
}

export default CartWidget