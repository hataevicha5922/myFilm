import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/signIn">SignIn</Link>
      <Link to="/signUp">SignUp</Link>
    </header>
  );
};

export default Header;
