import React from 'react';
import { useSelector } from 'react-redux';
import { getMoviesTitle } from '../../store/movie';
import { getSeriesList } from '../../store/series';
import { useGetMoviesListQuery } from '../../store/search';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const { status, error } = useSelector((state) => state.series);
  const seriesList = useSelector(getSeriesList);
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
          {moviesError && <h2 className="movie-list-title">Error ....</h2>}
          {moviesList?.map((movie) => (
            <MovieCard data={movie} />
          ))}
        </div>
      </div>
      <div className="series-list">
        <h2 className="series-list-title">Series</h2>
        <div className="movie-container">
          {status === 'loading' && (
            <h2 className="series-list-title">Loading...</h2>
          )}
          {error && <h2 className="series-list-title">Error {error}</h2>}
          {seriesList.map((episode) => (
            <MovieCard key={episode.imdbId} data={episode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
