import './ItemCount.scss'
import { useState } from 'react'


const ItemCount = ({id,stock, initial}) => {
    const [counter, setCounter] = useState(initial)
    
    const onAdd = () => {
      console.log(counter)
    }
    const decreaseValue = () => {
      setCounter(counter > initial ? counter - 1 : counter)
    }
    const increaseValue = () => {
      setCounter(counter < stock ? counter + 1 : counter)
    }
  return (
    <div className='itemCount'>
      <div className='buttonContainer'>
        <div className='counterButtons'>
          <button onClick={()=>decreaseValue()}>-</button>
          <h4>{counter}</h4>
          <button onClick={()=>increaseValue()}>+</button>
        </div>
      </div>
      <div className='buttonsContainer'>
        <div>
          <button className='addButton' onClick={()=>onAdd()}>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default ItemCount