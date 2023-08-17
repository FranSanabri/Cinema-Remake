// FoodModal.js
import React, { useState } from 'react';
import './FoodModal.css';

const foodsPerPage = 3; // Número de comidas por página

const FoodModal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Lista de comidas con imágenes (puedes agregar más)
  const foodsWithImages = [
    { name: 'Pochoclos', image: 'https://img.freepik.com/vector-gratis/diseno-caja-palomitas_1284-863.jpg?w=2000' },
    { name: 'Panchos', image: 'https://www.pngmart.com/files/8/Hot-Dog-PNG-Clipart-Background.png' },
    { name: 'Gomitas', image: 'https://arcorencasa.cl/wp-content/uploads/2020/09/5140933.png' },
    { name: 'Alfajor Sin Tacc', image: 'https://d22fxaf9t8d39k.cloudfront.net/39af2654e44fe9ac5e6f6d1e5db1d53130c35f79089cbfb79d835f68764545a467673.png' },
    { name: 'Galletitas Salti', image: 'https://www.losimplemercado.com.ar/productos/9182/g/9182.png' },
    { name: 'Turron Billiken Sin Tacc', image: 'https://golosinasbilliken.com.ar/wp-content/uploads/2022/05/turron-billiken-sin-tacc.png' },
    { name: 'Coca-Cola', image: 'https://www.pngmart.com/files/1/Coca-Cola-PNG-Photos.png' },
    { name: 'Sprite', image: 'https://www.pngmart.com/files/1/Sprite-Bottle-PNG-File.png' },
    { name: 'Fanta', image: 'https://www.pngplay.com/wp-content/uploads/12/Fanta-PNG-HD-Free-File-Download.png' },
  ];

  const totalPages = Math.ceil(foodsWithImages.length / foodsPerPage);
  const startIndex = (currentPage - 1) * foodsPerPage;
  const endIndex = startIndex + foodsPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={`food-modal ${isOpen ? 'open' : ''}`}>
      <div className="food-modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>¿Con qué lo acompañas?</h2>
        <ul className="food-list">
          {foodsWithImages.slice(startIndex, endIndex).map((food, index) => (
            <li key={index}>
              <img
                src={food.image} // URL de la imagen
                alt={food.name}
                className="food-image"
              />
              <p className="food-name">{food.name}</p> {/* Nombre de la comida */}
              <button className="add-to-cart-button">Agregar al carrito</button>
            </li>
          ))}
        </ul>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
