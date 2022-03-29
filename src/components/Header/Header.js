import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import RegisterGroup from '../RegisterGroup/RegisterGroup';
import { useAuth } from '../../hooks/useAuth';
import { setMoviesTitle } from '../../store/movie';
import SelectButton from '../SelectButton/SelectButton';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import './Header.scss';

const Header = () => {
  const { isAuth, userEmail } = useAuth();
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  console.log('isAuth', useAuth().isAuth);
  const searchHandler = (e) => {
    setTerm(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(setMoviesTitle(term));
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
      {isAuth && <AvatarGroup />}
      {!isAuth && <RegisterGroup />}
    </header>
  );
};

export default Header;
