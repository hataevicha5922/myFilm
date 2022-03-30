import React from 'react';
import { Link } from 'react-router-dom';

import './Movie.scss';

const Movie = (props) => {
  const { title, img, id } = props;

  return (
    <div className="movie-inner">
      <div className="movie-img">
        <Link to={`/movie/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>
    </div>
  );
};

export default Movie;
