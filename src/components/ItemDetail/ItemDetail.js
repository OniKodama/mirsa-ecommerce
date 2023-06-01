import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({id,title,img,price,description, stock}) => {
    const [goToCart, setGoToCart] = useState(false)

    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        setGoToCart(true)

        const item = {
            id,title,price, img, description
        }
        addItem(item,quantity)
    }
  return (
    <div className='detailContainer'>
        <div className='left'>
            <div className='itemDetailInfo'>
                <div className='productTitle'>
                    {title}
                </div>
                <div className='productImg'>
                    <img src = {img} alt=""/>
                </div>
            </div>    
        </div>
        <div className='right'>
                <div className='itemDetailInfo'>
                    <div className='desc'>
                        <p>{description}</p>
                    </div>
                    <div className = 'price'>
                        Price: ${price}
                    </div>
                    <div className = 'stock'>
                        Stock: {stock}
                    </div>
                    <div className='buttonsDetails'>
                        {goToCart  ? (
                            <Link to = "/cart" className='finish'><button className='finish'>Finish Purchase</button></Link>
                        ) : 
                            <ItemCount id = {id} stock = {stock} initial = {1} onAdd = {onAdd}/>
                        }
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemDetail