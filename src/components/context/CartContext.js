import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})
export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    console.log(cart)

    const addItem = (item,quantity) => {
    if(!isInCart(item.id)) {
        setCart(prev => [...prev, {...item,quantity}])
    } else {
        <h1>El producto ya fue agregado</h1>
    }
  }
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }
  const clearCart = () => {
    setCart([])
  }
  const isInCart = (itemId) => {
    return cart.find(prod => prod.Id === itemId)
  }
  const getTotal = () => {
    let total = 0
    cart.forEach((c) => {
      total = total + (c.quantity * c.price)
    })
    return total
  }
  const getQuantity = () => {
    let quantity = 0

    cart.forEach((c)=> {
      quantity += c.quantity
    })
    return quantity
  }
  return (
    <CartContext.Provider value = {{cart, addItem, removeItem, clearCart, getTotal, getQuantity}}>
        {children}
    </CartContext.Provider>
  )
}