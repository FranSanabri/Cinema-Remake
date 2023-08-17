import React from 'react';
import './Pagination.css'; // Agrega el archivo CSS de estilos

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>
      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
