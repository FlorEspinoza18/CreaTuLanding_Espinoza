import React from 'react';
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id,nombre,precio,categoria,descripcion, imagen}) => {

   return (
    <Card maxW='sm'>
        <CardBody>
            <Image
            src={imagen}
            alt={nombre}
            borderRadius='lg'
            boxSize='100%'
            objectFit='cover'
            h='400px'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'> {nombre} </Heading>
                <Text color='violet' fontSize='2x1'>
                    {descripcion}
                </Text>
                <Text color='violet' fontSize='2x1'>
                    ${precio}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>

            </ButtonGroup>
            <ItemCount initialValue={1} stock={5} />
        </CardFooter>
    </Card>
   ) 
}


export default ItemDetail