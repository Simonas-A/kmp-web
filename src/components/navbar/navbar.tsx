import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import {ROUTES} from '../routes/routes'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()

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
      {!isAuthenticated && (
        <li className="nav-item">
          <a className="nav-link pointer" onClick={() => loginWithRedirect()}>Prisijungti</a>
        </li>
      )}
      {isAuthenticated && (
        <li className="nav-item d-flex align-items-center">
          
          <a className="nav-link pointer">{user?.name}</a>
          <img
            src={user?.picture}
            alt={user?.name}
            className="rounded-circle mr-2"
            style={{ width: "30px", height: "30px" }}
          />
          <div className="vl"></div>
          <svg onClick={() => logout()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right pointer" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
        </li>
      )}
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
