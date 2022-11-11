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
            <div className="container-lg emptyCart justify-content-center py-5 text-center">
                <h3 className="text-center"> El carrito se encuentra vacío </h3>
                <button className="mt-5"><Link to='/' className="backLink"> Ver productos </Link></button>
            </div>
        )
    }
    return (
        <div className="container-lg py-5">
            <h1 className="py-5 text-center">DETALLE DE COMPRA</h1>
            <div className='productsCart'>
                {cart.map(products => (
                        <ItemCart key={products.id} {...products} />
                    ))
                }
            </div>
            <div className="container text-center">
                <button> <Link to='/Checkout' className="ordenLink"> Generar Orden </Link></button>
                <p> Precio total: $ {total}</p>
                <button className="mx-2" onClick={() => clearCart(Cart)}>Vaciar el carrito</button>
                <button onClick={() => navigate(-1)} >Volver</button>
            </div>
        </div>
    );
}

export default Cart;