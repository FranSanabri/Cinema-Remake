import React from 'react';
import './MovieModal.css'; // Agrega estilos para el modal

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button> {/* Botón "X" para cerrar */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="modal-poster"
        />
        <h2 className="modal-title">{movie.title}</h2>
        <p className="modal-description">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieModal;
