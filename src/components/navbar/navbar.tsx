import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import {ROUTES} from '../routes/routes'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">AutoMinus</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/add-listing" className="nav-link">Įdėti skelbimą</Link>
          </li>
          <li className="nav-item">
            <Link to="/car-list" className="nav-link">Visi skelbimai</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Apie mus</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
