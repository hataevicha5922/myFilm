import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

export const Button = ({ title, path }) => {
  return (
    <>
      <Link className="button-sign" to={path}>
        {title}
      </Link>
    </>
  );
};
