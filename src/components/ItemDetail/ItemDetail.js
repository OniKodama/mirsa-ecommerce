import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,title,img,price,description, stock}) => {
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
                        <ItemCount id = {id} stock = {stock} initial = {1}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemDetail