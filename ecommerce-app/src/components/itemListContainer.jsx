import React, { useState } from 'react';
import ProductList from './productList';
import ProductDetail from './productDetail';

const ItemListContainer = ({ greeting }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{greeting}</h2>
          {selectedProduct ? (
            <ProductDetail product={selectedProduct} />
          ) : (
            <ProductList onProductClick={handleProductClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;