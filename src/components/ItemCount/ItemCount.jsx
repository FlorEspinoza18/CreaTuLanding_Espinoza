import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Box, Heading } from '@chakra-ui/react'

const ItemCount = ({initial, stock}) => {
    const { count, increment, decrement } = useCounter(initial, stock)

  return (
    <Box ml={2}>
        <Button colorScheme='pink' onClick={decrement}>-</Button>
        <Heading>{count}</Heading>
        <Button colorScheme='pink' onClick={increment}>+</Button>
    </Box>
  )
}

export default ItemCount