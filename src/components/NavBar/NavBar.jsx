import React from 'react';
import { Box, Flex, Heading, Spacer, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { BsChevronDown } from 'react-icons/bs';
import logo from "../../assets/GiftedJourneysLogo3.png";

const NavBar = ({ menuItems }) => {

  return (
    <Flex p="2" bg="violet" align="center">
        <Box p="1">
            <Heading size="md" color="pink">
                <Link to={'/'}>
                    <img src={logo} width={'50%'} alt="Logo" />
                </Link>
            </Heading>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center">
            <Link to={'/'} color="pink" mr="4">
            Inicio
            </Link>
            <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown /> } width="180px" >
                Categorías
            </MenuButton>
            <MenuList >
                <MenuItem><Link to={'/category/Comida'}>Comida</Link></MenuItem>
                <MenuItem><Link to={'/category/Viaje'}>Viaje</Link></MenuItem>
                <MenuItem><Link to={'/category/Experiencia'}>Experiencia</Link></MenuItem>
            </MenuList>
            </Menu>
            <Link to={'/cart'}>
                <CartWidget />  
            </Link>
        </Box>
    </Flex>
);
};

export default NavBar;