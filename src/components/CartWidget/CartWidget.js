import cart from './assets/cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const CartWidget = () => {    
   

    return (
        <div id='cartWidget' className='cartStyle text-center'>
            <Link to='/Cart'><img className= 'cartImg' src={cart} alt='cart'/>
                <CartContext.Consumer>{context  => (<span>{context.totalQuantity}</span>)}</CartContext.Consumer></Link>
        </div>
    )
}

export default CartWidget