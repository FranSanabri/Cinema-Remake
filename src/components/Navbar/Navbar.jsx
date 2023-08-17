// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import FoodModal from '../FoodModal/FoodModal'; // Importa el componente FoodModal

const Navbar = ({ onSearch, onFilterChange }) => {
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);

  const handleFoodModalOpen = () => {
    setIsFoodModalOpen(true);
  };

  const handleFoodModalClose = () => {
    setIsFoodModalOpen(false);
  };

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
          <option value="movie">Películas</option>
          <option value="tv">Series</option>
        </select>
      </div>
      <div className="navbar-food">
        <button className="food-button" onClick={handleFoodModalOpen}>
          ¿Con qué lo acompañas?
        </button>
        <FoodModal isOpen={isFoodModalOpen} onClose={handleFoodModalClose} />
      </div>
    </div>
  );
};

export default Navbar;
