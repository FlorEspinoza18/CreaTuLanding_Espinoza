
import React, { useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css'; 

const CartWidget = () => {
  const cartCount = 0;

  return (
    <div className="cart-widget">
      <BsFillCartFill className="cart-icon" />
      <input
        type="number"
        value={cartCount}
        readOnly
      />
    </div>
  );
}

export default CartWidget;
