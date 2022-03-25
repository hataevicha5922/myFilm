import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
  const { isAuthenticated, userEmail } = useSelector((state) => state.user);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyFilms</Link>
      </div>
      {isAuthenticated && (
        <div>
          <h4>{userEmail}</h4> <button>LogOut</button>
        </div>
      )}
      {!isAuthenticated && (
        <div className="signBtn">
          <Link to="/signIn">SignIn</Link>
          <Link to="/signUp">SignUp</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
