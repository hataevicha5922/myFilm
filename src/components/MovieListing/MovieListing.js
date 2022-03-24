import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../store/movie';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="movie-list-title">Movies</h2>
        <div className="movie-container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbId} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
