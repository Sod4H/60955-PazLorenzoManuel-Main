import React from 'react';
import CartWidget from './cartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#!">peakpulse</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#!">Categoría 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Categoría 2</a>
            </li>
            {}
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;