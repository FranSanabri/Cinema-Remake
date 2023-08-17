// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ onSearch, onFilterChange }) => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">CINEMA</h1>
      <div className="navbar-search">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar películas"
          onChange={onSearch}
        />
        <select className="filter-select" onChange={onFilterChange}>
          <option value="movie">Peliculas</option>
          <option value="tv">Series</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
