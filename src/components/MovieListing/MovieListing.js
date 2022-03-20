import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../store/movie';

const MovieListing = () => {
  const movies = useSelector(getAllMovies());
  console.log(movies);
  return <div>MovieListing</div>;
};

export default MovieListing;
