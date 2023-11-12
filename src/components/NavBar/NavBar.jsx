
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/GiftedJourneysLogo3.png';
import './navbar.css';

const NavBar = ({ menuItems }) => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="divNavBar">
        <ul>
          {/* aceptar array como props para generar dinamicanete los elementos de la lista */}
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
