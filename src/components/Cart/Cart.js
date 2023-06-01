import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './Cart.scss'
import {Link} from 'react-router-dom'
import { collection,getDocs, addDoc, getFirestore} from 'firebase/firestore'

const Cart = () => {
    const {cart, clearCart,removeItem, getTotal} = useContext(CartContext)

    const order = {
        buyer: {
            name: "Pepe",
            email: "pepe@gmail.com",
            phone: "123"
        },
        items: cart.map(product => (
            {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.quantity
            }
        )) 
    }
      const handleClick = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection,order)
         .then(({id}) => console.log(id))
    }
    
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
            <Link to = "/checkout" className = "button">Finish Purchase</Link>
            <button className='button' onClick={()=>clearCart()}>Clear Cart</button>
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