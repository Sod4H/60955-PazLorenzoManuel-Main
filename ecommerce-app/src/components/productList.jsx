import React from 'react';

const products = [
  { id: 1, name: 'Campera 1', description: 'Descripción de la campera 1', price: 50 },
  { id: 2, name: 'Campera 2', description: 'Descripción de la campera 2', price: 60 },
  { id: 3, name: 'Pantalon 1', description: 'Descripción de el pantalon 1', price: 90 },
];

const ProductList = ({ onProductClick }) => {
  return (
    <div>
      <h3>Productos</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - <button onClick={() => onProductClick(product)}>Detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;