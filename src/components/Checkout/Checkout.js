import React, { useContext, useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import {db} from '../../services/firebase/firebaseConfig'
import { CartContext} from '../context/CartContext'
import { collection, documentId, getDocs, query, where, writeBatch, addDoc } from 'firebase/firestore'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const {cart, total, clearCart} = useContext(CartContext)

  const createOrder = async ({name, phone, email}) => {
    setLoading(true)

    try{
      const objOrder = {
        buyer: {
          name, phone, email
        },
        items: cart,
        total: total
      }
      const batch = writeBatch(db)

      const outStock = []

      const ids = cart.map(prod => prod.id)

      const productsRef = collection(db, 'products')

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if(stockDb >= prodQuantity){
          batch.update(doc.ref, {stock: stockDb - prodQuantity})
        }else {
          outStock.push({id: doc.id, ...dataDoc})
        }
      })
      if(outStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        
        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()
      } else {
        console.log(`There're products out of the stock`)
      }
    } catch(error) {
      console.log(error)
    }
  }
  if(loading) {
    return <h1>Se esta cargando su orden...</h1>
  }
  if(orderId){
    return <h1>Su numero de orden es: {orderId}</h1>
  }
   return (
    <div className='checkoutContainer'>
      <CheckoutForm onConfirm = {createOrder}/>
    </div>
  )
}

export default Checkout