import './ItemCount.scss'
import { useState } from 'react'


const ItemCount = ({id,stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    
    const decreaseValue = () => {
      setQuantity(quantity > initial ? quantity - 1 : quantity)
    }
    const increaseValue = () => {
      setQuantity(quantity < stock ? quantity + 1 : quantity)
    }

  return (
    <div className='itemCount'>
      <div className='buttonContainer'>
        <div className='counterButtons'>
          <button onClick={()=>decreaseValue()}>-</button>
          <h4>{quantity}</h4>
          <button onClick={()=>increaseValue()}>+</button>
        </div>
      </div>
      <div className='buttonsContainer'>
        <div>
          <button className='addButton' onClick={()=>onAdd(quantity)} disabled = {!stock}>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default ItemCount