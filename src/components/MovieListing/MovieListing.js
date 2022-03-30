import React from 'react';
import { useSelector } from 'react-redux';
import { getMoviesTitle } from '../../store/movie';
import { useGetMoviesListQuery } from '../../store/search';
import PageNotFound from '../PageNotFound/PageNotFound';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const moviesTitle = useSelector(getMoviesTitle);
  const {
    data: moviesList,
    error: moviesError,
    isLoading,
  } = useGetMoviesListQuery(moviesTitle);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="movie-list-title">Movies</h2>
        <div className="movie-container">
          {isLoading && <h2 className="movie-list-title">Loading...</h2>}
          {moviesError && <PageNotFound />}
          {moviesList?.map((movie) => (
            <MovieCard key={movie.imdbID} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
