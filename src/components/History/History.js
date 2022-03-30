import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { getMovies } from '../../api/apiHandler/getDataBase';
import './History.scss';

const History = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(movies, setMovies);
  }, []);

  return (
    <>
      <h1>History</h1>
      <div className="history">
        {movies.map((mov) => (
          <MovieCard
            key={mov.id}
            id={mov.id}
            title={mov.title}
            img={mov.img}
            year={mov.Year}
          />
        ))}
      </div>
    </>
  );
};

export default History;
