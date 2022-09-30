import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartStyle'>
            <img className= 'cartImg' src={cart} alt='cart'/> <span className='cartMargin'>3</span>
        </div>
    )
}

export default CartWidget