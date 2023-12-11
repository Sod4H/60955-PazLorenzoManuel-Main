import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const hardcodedItemCount = 5; // Cambia este valor según tus necesidades

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} className="bi bi-cart" />
      {hardcodedItemCount > 0 && <span className="notification-badge">{hardcodedItemCount}</span>}
    </div>
  );
};

export default CartWidget;