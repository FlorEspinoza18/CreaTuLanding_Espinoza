import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { RingLoader } from 'react-spinners';
import ItemList from '../ItemList/ItemList';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { db } from '../../config/Firebase';

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const queryRef = !categoryId ? collection(db, 'productos') :
        query(collection(db, 'productos'), where('categoria', '==', categoryId));

      const response = await getDocs(queryRef);

      const products = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      setTimeout(() => {
        setData(products);
        setIsLoading(false);
      }, 1000);
    };

    getData();
  }, [categoryId]);

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} m={4}>
      {isLoading ? (
        <RingLoader color="#BF3CE9" loading={isLoading} size={150} />
      ) : (
        <>
            <Heading as="h1" fontSize="2xl" color="#6A0572" mb={4}>
            {title}
          </Heading>
          {categoryId && (
            <Heading as="h1" fontSize="lg" color="#6A0572">
              Categoría: {categoryId}
            </Heading>
          )}
          {/* <Heading>{title}</Heading>
          {categoryId && <Heading>Categoría: {categoryId}</Heading>} */}
          <ItemList data={data} />
        </>
      )}
    </Flex>
  );
};

export default ItemListContainer;
