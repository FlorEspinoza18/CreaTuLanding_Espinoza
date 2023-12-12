import React from 'react';
import { Box, Flex, Heading, Spacer, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavBar = ({ menuItems }) => {
  
  return (
    <Flex p="4" bg="pink.300" align="center">
      <Box p="2">
        <Heading size="md" color="pink">
          <Link to={'/'}>      
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box display="flex" alignItems="center">
        {menuItems && (
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorías
          </MenuButton>
          <MenuList>
          <MenuItem><Link to={'/category/Comida'} >Comida</Link></MenuItem>
            <MenuItem><Link to={'/category/Viaje'} >Viaje</Link></MenuItem>
            <MenuItem><Link to={'/category/Experiencia'} >Experiencia</Link></MenuItem>

          </MenuList>
        </Menu>
        <CartWidget />
      </Box>
    </Flex>
  );
}

export default NavBar;
