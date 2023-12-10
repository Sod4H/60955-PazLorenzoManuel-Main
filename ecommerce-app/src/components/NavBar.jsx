import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PeakPulse
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/camperas">
                Camperas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pantalones">
                Pantalones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cascos">
                Cascos
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;