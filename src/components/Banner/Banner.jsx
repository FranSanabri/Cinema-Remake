import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import './Banner.css';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f2d1404040b9ca160f4e003bf835bde5';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

const Banner = ({ onTrailerClick }) => {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false); // Estado para controlar la reproducción del trailer

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(`${API_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
          },
        });

        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const selectedMovie = response.data.results[randomIndex];
        setMovie(selectedMovie);

        if (selectedMovie && selectedMovie.id) {
          fetchMovieTrailer(selectedMovie.id);
        }
      } catch (error) {
        console.error('Error fetching random movie:', error);
      }
    };

    fetchRandomMovie();
  }, []);

  const fetchMovieTrailer = async (movieId) => {
    try {
      const response = await axios.get(`${API_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
          append_to_response: 'videos',
        },
      });

      if (response.data.videos && response.data.videos.results) {
        const trailer = response.data.videos.results.find(
          (vid) => vid.name === 'Official Trailer'
        );
        setTrailer(trailer ? trailer : response.data.videos.results[0]);
      }
    } catch (error) {
      console.error('Error fetching movie trailer:', error);
    }
  };

  const handlePlayTrailer = () => {
    setPlaying(true);
  };

  const handleCloseTrailer = () => {
    setPlaying(false);
  };

  return (
    <div className="viewtrailer" style={{ backgroundImage: `url("${IMAGE_PATH}${movie?.backdrop_path}")` }}>
      <div className="container">
        {playing ? (
          <div className="reproductor-container">
            <YouTube
              videoId={trailer?.key}
              className="reproductor"
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  cc_load_policy: 0,
                  fs: 0,
                  iv_load_policy: 0,
                  modestbranding: 0,
                  rel: 0,
                  showinfo: 0,
                },
              }}
            />
            <button className="boton" onClick={handleCloseTrailer}>
              Close
            </button>
          </div>
        ) : (
          <>
            {trailer ? (
              <button className="boton" onClick={handlePlayTrailer}>
                Play Trailer
              </button>
            ) : (
              'Sorry, no trailer available'
            )}
            <h1 className="text-white">{movie?.title}</h1>
            {movie?.overview && <p className="text-white">{movie.overview}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
