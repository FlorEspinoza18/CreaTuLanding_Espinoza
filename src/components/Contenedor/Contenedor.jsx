import React from 'react';
import './Contenedor.css';

const ContenedorProducto = ({ imagen, nombre, precio, descripcion }) => {
  return (
    <div className="contenedor-producto">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <h3 className="producto-nombre">{nombre}</h3>
      <p className="producto-precio">{precio}</p>
      <p className="producto-descripcion">{descripcion}</p>
    </div>
  );
}

export default ContenedorProducto;
