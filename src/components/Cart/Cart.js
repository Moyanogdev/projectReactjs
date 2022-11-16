import { useContext } from "react";
import cartVacio from './assets/cartVacio.png';
import { CartContext } from "../../CartContext/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import './Cart.css';

const Cart = () => {
    const { cart, totalQuantity, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    if (totalQuantity === 0) {
        return (
            <div className="container-lg emptyCart justify-content-center py-5 text-center">
                <h3 className="text-center mb-5"> El carrito se encuentra vacío </h3>
                <div className="container">
                    <img src={cartVacio} className="py-3" width='250' alt="imagen carrito vacío" />
                </div>
                <button className="mt-5"><Link to='/' className="backLink"> Ver productos </Link></button>
            </div>
        )
    }


    let total =0;

    for (var i = 0, l = cart.length; i < l; i++) {
        total = total + (cart[i].price * cart[i].count)
    }

    const mensajeToast = () => {
        Toastify({
            text: "Productos eliminados del carrito",
            duration: 3000,
            gravity: "top",
            position: "right",
            style:{
                background:"red",
                fontSize:"15px"
            },
        }).showToast();
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
                <button className="mx-2" onClick={() => {clearCart(Cart); mensajeToast()}}>Vaciar el carrito</button>
                <button onClick={() => navigate(-1)} >Volver</button>
            </div>
        </div>
    );
}

export default Cart;