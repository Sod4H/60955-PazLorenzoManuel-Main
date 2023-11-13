import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const categories = ['Electrónicos', 'Ropa', 'Libros', 'Hogar'];

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>

      <div className="list-group">
        {categories.map((category, index) => (
          <a key={index} href="#" className="list-group-item list-group-item-action">
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;