import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contenedor from './components/Contenedor/Contenedor';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import logo from './assets/GiftedJourneysLogo3.png';
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer title='Tienda'/>} />
            <Route path={'/product/:itemId'} element={<ItemDetailContainer/>} />
            <Route path={'/category/:categoryId'} element={<ItemListContainer  title='Tienda'/>} />
            <Route path={'/cart'} element={<Cart />}/>
            <Route path={'/checkout'} element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
     )
  }
export default App;
