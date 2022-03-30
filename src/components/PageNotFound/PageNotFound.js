import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to={'/'} className="more-link">
          MyFilm
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
