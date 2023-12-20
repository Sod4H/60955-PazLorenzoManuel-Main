import React, { useState } from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Campera 1', description: 'Campera naranja', price: 50, imageUrl:'img/Campera1.jpg' },
  { id: 2, name: 'Campera 2', description: 'Campera verde', price: 60, imageUrl:'img/Campera2.jpg' },
  { id: 3, name: 'Mochila 1', description: 'Descripción de1', price: 110, imageUrl:'' },
  { id: 4, name: 'Mochila 2', description: 'Descripción del casco 2', price: 100, imageUrl:'' },
  { id: 5, name: 'Pantalón 1', description: 'Descripción del pantalón 1', price: 90, imageUrl:'' },
  { id: 6, name: 'Pantalón 2', description: 'Descripción del pantalón 2', price: 85, imageUrl:'' },
  { id: 7, name: 'Pantalón 3', description: 'Descripción del pantalón 3', price: 80, imageUrl:'' },

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