import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { RingLoader } from 'react-spinners';
import { Spinner } from '@chakra-ui/react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(true); // Añade estado para el indicador de carga
  const [loading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true); // Establece isLoading en true al inicio de la carga

    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((prod) => {
          setData(prod);
          setIsLoading(false); // Cambia isLoading a false cuando se completa la carga
        })
        .catch((err) => console.log(err));
    } else {
      getProducts()
        .then((prod) => {
          setData(prod);
          setIsLoading(false); // Cambia isLoading a false cuando se completa la carga
        })
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} color='violet'>
      <Box>
        <Heading>{title}</Heading>
      </Box>
      {loading ? ( 
        <RingLoader color="#BF3CE9" loading={loading} size={150} />
      ) : (
        <ItemList data={data} />
      )}
    </Flex>
  );
};

export default ItemListContainer;