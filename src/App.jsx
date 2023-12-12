import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contenedor from './components/Contenedor/Contenedor';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import logo from './assets/GiftedJourneysLogo3.png';

function App() {

  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:itemId' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='*' element={<h1>Error</h1>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
