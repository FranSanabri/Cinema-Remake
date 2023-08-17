import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import Pagination from './components/Pagination/Pagination';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer'; // Importa el componente Footer


const API_KEY = 'f2d1404040b9ca160f4e003bf835bde5';
const MOVIES_PER_PAGE = 12;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('movie');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTrailerKey, setSelectedTrailerKey] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let apiUrl = `https://api.themoviedb.org/3/${filter}/popular?api_key=${API_KEY}&page=${currentPage}&per_page=${MOVIES_PER_PAGE}`;
        if (searchTerm !== '') {
          apiUrl = `https://api.themoviedb.org/3/search/${filter}?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage}&per_page=${MOVIES_PER_PAGE}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchTerm, filter, currentPage]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTrailerClick = (trailerKey) => {
    setSelectedTrailerKey(trailerKey);
  };

  const handleBannerClose = () => {
    setSelectedTrailerKey(null);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <Banner selectedTrailerKey={selectedTrailerKey} onClose={handleBannerClose} />
      <MovieList movies={movies} onTrailerClick={handleTrailerClick} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <Footer />
    </div>
  );
};

export default App;
