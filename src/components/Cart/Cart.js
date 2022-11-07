import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
    const { cart, totalQuantity, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    if (totalQuantity === 0) {
        return (
            <div className="center">
                <h3> El carrito se encuentra vacío </h3>
                <button className="atras"><Link to='/' className="orden"> Ver productos </Link></button>
            </div>
        )
    }
    return (
        <div className="container mb-5">
            <h1>CARRITO</h1>
            {cart.map(products => (
                    <ItemCart key={products.id} {...products} />
                ))
            }
            <div className="container">
                <button className="orden"> <Link to='/Checkout' className="orden"> Generar Orden </Link></button>
                <p> Precio total: $ {total}</p>
                <button className="generator3" onClick={() => clearCart(Cart)}>Vaciar el carrito</button>
                <button onClick={() => navigate(-1)} >Volver</button>
            </div>
        </div>
    );
}

export default Cart;