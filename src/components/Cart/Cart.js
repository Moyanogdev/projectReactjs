import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
    const { Cart, removeItem, getTotal, clearCart } = useContext(CartContext)
    return (
        <div>
            <h1>Carrito</h1>
            {Cart.map(prod => (
                    <div>
                        {prod.name} - cantidad: {prod.count}
                        <button onClick={() => removeItem(prod.id)}>remover</button>
                    </div>
                ))
            }
            <div>
                <button className="generator">Generar orden</button>
                <button className="generator2"> Precio total: $ {getTotal(Cart)}</button>
                <button className="generator3" onClick={() => clearCart(Cart)}>Vaciar el carrito</button>
            </div>
        </div>
    );
}

export default Cart;