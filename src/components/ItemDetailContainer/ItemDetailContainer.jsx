import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/Firebase';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getProduct = async () => {
      const queryRef = doc(db, 'productos', itemId);
      const response = await getDoc(queryRef);

      const newProduct = {
        id: response.id,
        ...response.data(),
      };

      setTimeout(() => {
        setProduct(newProduct);
        setIsLoading(false);
      }, 500);
    };
    getProduct();
  }, [itemId]);

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} m={4}>
      <RingLoader color="#BF3CE9" loading={isLoading} size={150} />
      {!isLoading && (
        <Flex justify={'center'} align={'center'}>
          <ItemDetail {...product} />
        </Flex>
      )}
    </Flex>
  );
};

export default ItemDetailContainer;
