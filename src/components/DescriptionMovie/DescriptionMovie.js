import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faThumbsUp,
  faFilm,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import './DescriptionMovie.scss';

const DescriptionMovie = ({ data, nav }) => {
  return (
    <div className="wrapper-description">
      <div className="title-movie">{data.Title}</div>
      <div className="description-movie">
        <span>
          IMDB Rating <FontAwesomeIcon icon={faStar} /> : {data.imdbRating}
        </span>
        <span>
          IMDB Votes <FontAwesomeIcon icon={faThumbsUp} /> : {data.imdbVotes}
        </span>
        <span>
          Runtime <FontAwesomeIcon icon={faFilm} /> : {data.Runtime}
        </span>
        <span>
          Year <FontAwesomeIcon icon={faCalendar} /> : {data.Year}
        </span>
      </div>
      <div className="plot-movie">{data.Plot}</div>
      <div className="info-movie">
        <div>
          <span>Director</span>
          <span>{data.Director}</span>
        </div>
        <div>
          <span>Stars</span>
          <span>{data.Actors}</span>
        </div>
        <div>
          <span>Generes</span>
          <span>{data.Genre}</span>
        </div>
        <div>
          <span>Languages</span>
          <span>{data.Language}</span>
        </div>
        <div>
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>
      </div>
    </div>
  );
};

DescriptionMovie.propTypes = {
  data: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
    imdbVotes: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Language: PropTypes.string.isRequired,
    Awards: PropTypes.string.isRequired,
  }).isRequired,
  nav: PropTypes.func.isRequired,
};

DescriptionMovie.defaultProps = {
  nav() {},
};

export default DescriptionMovie;
