import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './MovieCard.scss';

const MovieCard = (props) => {
  const { id, title, img, year } = props;
  const { isAuth } = useAuth();

  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={img} alt={title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{title}</h4>

            <p>{year}</p>

            {isAuth && (
              <div className="show-link">
                {' '}
                <Link className="link" to={`/movie/${id}`}>
                  Show more
                </Link>
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
