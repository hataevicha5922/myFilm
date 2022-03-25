import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../store/movie';
import { fetchAsyncSeries } from '../../store/series';

import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
