import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './MovieCard.scss';

const MovieCard = (props) => {
  const { data } = props;
  const { isAuth } = useAuth();

  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>

            <p>{data.Year}</p>

            {isAuth && (
              <div className="show-link">
                {' '}
                <Link to={`/movie/${data.imdbID}`}>Show more</Link>
              </div>
            )}
            {!isAuth && (
              <div className="show-link">
                {' '}
                <Link className="link" to={`/signIn`}>
                  Show more
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
