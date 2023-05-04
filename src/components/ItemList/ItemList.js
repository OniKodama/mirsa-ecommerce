import './ItemList.scss'
import Item from '../Item/Item'

const CardList = ({products}) => {
  
  return (
    <div className = "cardList">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
        ))}
    </div>
  )
}

export default CardList