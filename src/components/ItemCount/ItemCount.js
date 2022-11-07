import { useState } from "react"

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

    const [buttonText, setButtonText] = useState("Agregar Producto al Carrito");
    
    return (
        <div>
            <h5>Cantidad</h5>
            <h6> {count} </h6>
            <button className="text-white bg-dark" onClick={decrement}>-</button>
            <button className="text-white bg-dark" onClick={increment}>+</button>

            <button className="text-white bg-dark mx-5" onClick={() =>{ onAdd(count); setButtonText("Elemento agregado") }}>{buttonText}</button>
        </div >
    )
}

export default ItemCount