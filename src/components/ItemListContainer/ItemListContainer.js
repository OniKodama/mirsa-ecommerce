import { useEffect, useState } from 'react'
import CardList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import {getProducts, getProductByCategory} from '../../data'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([])
  const [loading, setLoading]  = useState(true)

  const {categoryId} = useParams()
  
  useEffect(() =>{
    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products')

      getDocs(collectionRef)
        .then(response => {
          const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setProducts(productsAdapted)
        })
        .catch(error =>{
          console.log(error)
        })
        .finally(()=> {
          setLoading(false)
        })
    /* const singleItemList = categoryId ? getProductByCategory : getProducts */
    
    /* singleItemList(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(err => {
        console.log(err)
      }) */
  },[categoryId])
  return (
    <>
    {products.length > 0 ? ( 
      <div className='itemListContainer'>
        <CardList products={products}/>
      </div>
      ) : 
      (
        <Loading />
      )}
      </>
  )
}
export default ItemListContainer