import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h1>NavBar</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/paginauno">PaginaUno</Link></li>
        <li><Link to="/paginados">PaginaDos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;