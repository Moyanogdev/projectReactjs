import { useState } from "react"


let stock = 10

const Counter = ({onAdd}) => {
  const [count, setCount] = useState(0)
  
    
    const increment = () => {
        if (count < stock) {
            setCount (count +1)
            }
        }

    const decrement = () => {
        if (count >0){
            setCount (count -1)
            }
        }

    return (
        <div>
            <h5>Cantidad</h5>
            <h6> {count} </h6>
            <button className="text-white bg-dark" onClick={decrement}>-</button>
            <button className="text-white bg-dark" onClick={increment}>+</button>
            <div className="text-center">
                <button onClick={onAdd}>Agregar producto</button>
            </div>
        </div >
    )
}

export default Counter