import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h3>Detalles del producto</h3>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;