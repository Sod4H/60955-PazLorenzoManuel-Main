import React from 'react';
import Navbar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a PeakPulse!" />
    </div>
  );
};

export default App;
