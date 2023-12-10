import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;