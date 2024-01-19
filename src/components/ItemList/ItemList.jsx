import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Item from '../Item/Item'

const ItemList = ({ data }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">

        {data.map((products) => (
            <Box 
              key={products.id} 
              boxShadow='lg' 
              m={2}
              maxW="sm"  
              minW="sm"
              >
                <Item {...products} />
            </Box>
        ))}
    </Flex>
  )
}
export default ItemList