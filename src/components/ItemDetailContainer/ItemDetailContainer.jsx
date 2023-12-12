import {Box, Flex, Heading} from '@chakra-ui/react'
import { useEffect } from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import { getProductById, getProducts, getProductsByCategory } from '../../data/asyncMock'
import { RingLoader } from 'react-spinners';
import { Spinner } from '@chakra-ui/react'
import ItemList from '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams()

  useEffect(() => {
   getProductById(itemId)
   .then((prod) => {
    setProduct(prod);
    setLoading(false);
    console.log(prod); 
   })
  }, [itemId])

  return(
    <div>
      {loading ? (
        <div className="spinner">
          <RingLoader color="##BF3CE9" loading={loading} size={150} />
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  )
}

export default ItemDetailContainer