
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css';
import Contenedor from './components/Contenedor/Contenedor';

function App() {
  
  //array de elementos para pasar como props a navbar.
  const menuItems = ['Servicios', 'Nosotros', 'Contacto'];

  return (
    <div>
        <NavBar menuItems={menuItems} />
        <ItemListContainer title={"PRODUCTOS "}/>

        <div className="contenedores">
        <Contenedor />
        <Contenedor />
        <Contenedor />
        <Contenedor />
        </div>
      </div>
    
  );
}
export default App
