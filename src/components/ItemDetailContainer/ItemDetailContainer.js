import { useEffect,useState } from 'react'
import './ItemDetailContainer.scss'
import { getProductById } from '../../data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)
    
    const { itemId } = useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response=>{
            setProduct(response)
        })
        .catch(err=>{
            console.log(err)
        })
    },[itemId])
  return (
    <div className='itemDetailContainer'>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer

