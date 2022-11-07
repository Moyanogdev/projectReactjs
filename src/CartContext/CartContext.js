import React from "react";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
       
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
    }, [cart])

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart])


  const addItem = (productToAdd) => {    
    
    if(!inCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
    } else {
        const cartUpdated = cart.map(products => {
            if (products.id === productToAdd.id) {
                const productUpdated = {
                    ...products,
                    quantity: productToAdd.quantity
                }

                return productUpdated
            } else{
                return products
            }
        })

        setCart(cartUpdated)
    }
  }

  const inCart = (id) => {
      return cart.find(products => products.id === id) ? true : false
  }

  const removeItem = (id) => {
      const cartWithoutProduct = cart.filter(products => products.id !== id)
      setCart(cartWithoutProduct)
  }
  const getQuantity = () => {
      let accu = 0

      cart.forEach(products => {
          accu += products.quantity
      })

      return accu
  }
  const getTotal = () => {
      let accu = 0

      cart.forEach(products => {
          accu = products.quantity * products.price
      })

      return accu
  }

  const clearCart = () => {
      setCart([])
  }

  const getProductQuantity = (id) => {
    const product = cart.find(products => products.id === id)
    return product?.quantity
  }


  return (
      <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, getQuantity, getTotal, clearCart, inCart, total, getProductQuantity}}>
          {children}
      </CartContext.Provider>
  )
}