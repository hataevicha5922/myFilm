import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import { getData } from '../../api/apiHandler/getDataBase';
import { getDatabase, ref, child, get } from 'firebase/database';
import './History.scss';

const History = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `movies`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const arrMovies = Object.values(snapshot.val());
          const movs = arrMovies.map((mov) => ({
            id: mov.id,
            title: mov.movieName,
            img: mov.movie_picture,
          }));
          setMovies(movs);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="history">
      {movies.map((mov) => (
        <Movie key={mov.id} id={mov.id} title={mov.title} img={mov.img} />
      ))}
    </div>
  );
};

export default History;
