import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import movieApi from '../../common/apis/movieApi';
import APIKey from '../../common/apis/MovieApiKey';
import { addMovies } from '../../store/movie/slice';
import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => console.log('Error :', err));
      dispatch(addMovies(response.data.Search));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
