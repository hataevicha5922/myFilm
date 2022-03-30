import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import RegisterGroup from '../RegisterGroup/RegisterGroup';
import { useAuth } from '../../hooks/useAuth';
import { setMoviesTitle } from '../../store/movie';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const { isAuth } = useAuth();
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchHandler = (e) => {
    setTerm(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(setMoviesTitle(term));
    setTerm('');
    navigate('/');
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
      {isAuth && <AvatarGroup />}
      {!isAuth && <RegisterGroup />}
    </header>
  );
};

export default Header;
