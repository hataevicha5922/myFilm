import React from 'react';
import { useSelector } from 'react-redux';
import { getMoviesList } from '../../store/movie';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const moviesList = useSelector(getMoviesList);
  const { status, error } = useSelector((state) => state.movies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="movie-list-title">Movies</h2>
        <div className="movie-container">
          {status === 'loading' && (
            <h2 className="movie-list-title">Loading...</h2>
          )}
          {error && <h2 className="movie-list-title">Error {error}</h2>}
          {moviesList.map((movie) => (
            <MovieCard key={movie.imdbId} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
