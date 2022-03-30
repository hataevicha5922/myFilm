import React from 'react';
import PropTypes from 'prop-types';
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { writeMovieData } from '../../api/apiHandler/setDataBase';
import { useNavigate } from 'react-router-dom';
import './PosterMovie.scss';

const PosterMovie = ({ data }) => {
  const { imdbID: id, Title: title, Poster: poster } = data;
  const navigate = useNavigate();
  return (
    <div className="wrapper-poster">
      <div className="img-poster">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <button
        className="button-folder"
        onClick={() => {
          writeMovieData(data.imdbID, data.Title, data.Poster);
          navigate('/history');
        }}
      >
        <FontAwesomeIcon icon={faFolderClosed} />
      </button>
    </div>
  );
};
PosterMovie.propTypes = {
  data: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  }),
};
export default PosterMovie;
