import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncSeries } from '../../store/series';

import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncSeries('Friends'));
  }, []);

  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
