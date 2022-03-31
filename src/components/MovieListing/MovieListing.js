import React from 'react';
import { useSelector } from 'react-redux';
import { getMoviesTitle } from '../../store/movie';
import { useGetMoviesListQuery } from '../../store/search';
import PageNotFound from '../PageNotFound/PageNotFound';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
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
          {isLoading && <Preloader />}
          {moviesError && <PageNotFound />}
          {moviesList?.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              id={movie.imdbID}
              title={movie.Title}
              img={movie.Poster}
              year={movie.Year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
