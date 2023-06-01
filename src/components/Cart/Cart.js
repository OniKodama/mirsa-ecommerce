import { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'


const Cart = () => {
    const {cart, clearCart,removeItem, getTotal} = useContext(CartContext)

  return cart.length > 0 ? (
    <div className = 'cartContainer'>
        {
            cart.map((c)=>(
                <div key = {c.id} className='cartItems'>
                    <img src = {c.img} alt = {c.description}/>
                    <h6>{c.title}</h6>
                    <span>{c.quantity}</span>
                    <span>{c.price}</span>
                    <button onClick={()=>removeItem(c.id)}>-</button>
                </div>
            ))
        }
        <h2>Total: {getTotal()}</h2>
        <div className='buttonsContainer'>
            <Link to = "/checkout" className = "button"><button className = "button">Finish Purchase</button></Link>
            <button onClick={()=>clearCart()}>Clear Cart</button>
        </div>
    </div>
  ) : (
    <div className = 'cartContainer'>
        <h1>No Items Added</h1>
        <Link to = "/" className = "button">Keep Buying</Link>
    </div>
  )
}

export default Cart