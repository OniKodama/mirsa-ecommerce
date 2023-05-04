import { useEffect, useState } from 'react'
import CardList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import {getProducts, getProductByCategory} from '../../data'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([])

  const {categoryId} = useParams()
  
  useEffect(() =>{
    const singleItemList = categoryId ? getProductByCategory : getProducts
    
    singleItemList(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(err => {
        console.log(err)
      })
  },[categoryId])
  return (
    <div className='itemListContainer'>
        <h1>{greeting}</h1>
        <CardList products = {products}/>
        
    </div>
  )
}
export default ItemListContainer