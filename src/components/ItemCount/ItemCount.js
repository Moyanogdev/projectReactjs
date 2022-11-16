import { useState } from "react";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const mensajeToast = () => {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            gravity: "top",
            position: "right",
            style:{
                background:"green",
                fontSize:"15px"
            },
        }).showToast();
    }

    const [buttonText, setButtonText] = useState("Agrega producto al carrito");
    
    return (
        <div>
            <h5>Cantidad</h5>
            <h6> {count} </h6>
            <button className="text-white bg-dark" onClick={decrement}>-</button>
            <button className="text-white bg-dark" onClick={increment}>+</button>

            <button className="text-white bg-dark mx-5 mb-3" onClick={ () =>{ onAdd(count); setButtonText("Producto agregado"); mensajeToast()}}>{buttonText}</button>
        </div >
    )
}

export default ItemCount