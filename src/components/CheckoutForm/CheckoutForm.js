import React, { useState } from 'react'
import './CheckoutForm.scss'
import { useContext } from 'react'



const CheckoutForm = ({onConfirm}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')


  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
      name, phone, email
    }

    onConfirm(userData)
  }
  
  return (
    <div className='container'>
      <h1>Checkout</h1>
      <form onSubmit={handleConfirm} className = 'form'>
        <div className='input-field'>
          Name:
          <br />
          <input type='text' required value = {name} onChange={({target}) => setName(target.value)}/>
        </div>
        <div className='input-field'>
          Phone Number:
          <br />
          <input type='text' required value = {phone} onChange={({target}) => setPhone(target.value)}/>
        </div>
        <div className='input-field'>
          Email: 
          <br />
          <input type='text' required value = {email} onChange={({target}) => setEmail(target.value)}/>
        </div>
        <div className='submit'>
            <button type = 'submit' className = 'button'>Create Order</button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm