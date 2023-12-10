import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <ItemListContainer greeting="¡Bienvenido a PeakPulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;