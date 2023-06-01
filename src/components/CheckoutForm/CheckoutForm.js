import React, { useState } from 'react'

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
  onConfirm(userData)
  return (
    <div className='container'>
      <form onSubmit={handleConfirm} className = 'form'>
        <label className = 'label'>
          Nombre
          <input className='text' type = 'text' value = {name} onChange={({target}) => setName(target.value)}/>
        </label>
        <label className = 'label'>
          Phone Number
          <input className='text' type = 'text' value = {phone} onChange={({target}) => setPhone(target.value)}/>
        </label>
        <label className = 'label'>
          Email: 
          <input className='text' type = 'text' value = {email} onChange={({target}) => setEmail(target.value)}/>
        </label>
        <div className='submit'>
            <button type = 'submit' cñassName = 'button'>Create Order</button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm