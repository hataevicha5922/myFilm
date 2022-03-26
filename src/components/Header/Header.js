import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
import { store } from '../../store/store';
import { setMoviesTitle } from '../../store/movie';

const Header = () => {
  const { isAuthenticated, userEmail } = useSelector((state) => state.user);
  const [term, setTerm] = useState('');
  const searchHandler = (e) => {
    setTerm(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    store.dispatch(setMoviesTitle(term));
    setTerm('');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyFilms</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies"
            onChange={searchHandler}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
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
