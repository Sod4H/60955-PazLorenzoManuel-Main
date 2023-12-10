import React from 'react'; 

const CartWidget = () => {
  const itemCount = 3; 

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i> 
      <span className="badge bg-danger">{itemCount}</span> 
    </div>
  );
};

export default CartWidget;