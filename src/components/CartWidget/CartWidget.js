import cart from './assets/cart.png'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';

const CartWidget = () => {

    const { quantityTotal } = useContext (CartContext);
    return (
        <div className='cartStyle'>
            <img className= 'cartImg' src={cart} alt='cart'/>
            <div className='cartMargin'>
                <sup>{ quantityTotal }</sup>
            </div>
        </div>
    )
}

export default CartWidget