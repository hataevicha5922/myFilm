import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyFilms</Link>
      </div>
      <div className="signBtn">
        <Link to="/signIn">SignIn</Link>
        <Link to="/signUp">SignUp</Link>
      </div>
    </header>
  );
};

export default Header;
