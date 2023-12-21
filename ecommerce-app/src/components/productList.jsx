import React, { useState } from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Campera 1', description: 'Campera naranja', price: 50, imageUrl:'img/Campera1.jpg' },
  { id: 2, name: 'Campera 2', description: 'Campera verde', price: 60, imageUrl:'img/Campera2.jpg' },
  { id: 3, name: 'Mochila 1', description: 'Mochila azul gris y negra', price: 110, imageUrl:'img/mochila1.jpg' },
  { id: 4, name: 'Mochila 2', description: 'Mochila azul y celeste', price: 100, imageUrl:'img/mochila2.jpg' },
  { id: 5, name: 'Pantalón 1', description: 'Pantalón verde', price: 90, imageUrl:'img/pantalon1.jpg' },
  { id: 6, name: 'Pantalón 2', description: 'Pantalón mostaza', price: 85, imageUrl:'img/pantalon2.jpg' },
  { id: 7, name: 'Pantalón 3', description: 'Pantalón negro', price: 80, imageUrl:'img/pantalon3.jpg' },

];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProductList = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list-container">
      {selectedProduct ? (
        <div className="product-detail">
          <h3>Detalles de {selectedProduct.name}</h3>
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="product-image" />
          <p>{selectedProduct.description}</p>
          <p>Precio: ${selectedProduct.price}</p>
          <button onClick={handleBackToProductList}>Volver a la lista</button>
        </div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-item">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image resized-image"
            onClick={() => handleProductClick(product)}/>
          <h4>{product.name}</h4>
          <p>Precio: ${product.price}</p>
          <button onClick={() => handleProductClick(product)}>Detalles</button>
        </div>
        ))
      )}
    </div>
  );
};

export default ProductList;