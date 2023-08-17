import React, { useState } from 'react';
import './MovieList.css'; // Asegúrate de tener un archivo CSS para los estilos
import MovieModal from '../MovieModal/MovieModal'; // Importa el componente MovieModal

const MovieList = ({ movies }) => {
  const isMobile = window.innerWidth <= 768; // Verifica si es un dispositivo móvil
  const itemsPerRow = isMobile ? 2 : 4; // Define el número de elementos por fila

  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para controlar la película seleccionada

  const rows = [];
  for (let i = 0; i < movies.length; i += itemsPerRow) {
    const rowMovies = movies.slice(i, i + itemsPerRow);
    const row = (
      <div key={i} className="movie-row">
        {rowMovies.map((movie) => (
          <div key={movie.id} className="movie-item" onClick={() => setSelectedMovie(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="movie-poster"
            />
            <h2 className="movie-title">{movie.title || movie.name}</h2> {/* Agrega el nombre de la serie si es una serie */}
          </div>
        ))}
      </div>
    );
    rows.push(row);
  }

  return (
    <div className="movie-list">
      {rows}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
};

export default MovieList;
