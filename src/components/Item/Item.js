import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const Item = ({id,title,img,price,description, stock,itemId}) => {
  return (
    <div className = "itemContainer">
        <div className = 'infoContainer'>
            <div className = "header">
                <h2>{title}</h2>
            </div>
            <div className='image'>
                <img className = 'img' src = {img} alt = {description}/>
            </div>
            <h3 className='stock'>Stock: {stock}</h3>
            <div className='countersbutton'>
                <ItemCount stock = {stock} initial = {1}/>
            </div>
            <div className='detailButton'>
              <Link to = {`/item/${id}`}>
                <button>View More Details</button>
              </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Item