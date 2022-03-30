import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../store/user';
import { useDispatch } from 'react-redux';
import './SelectButton.scss';

const SelectButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return (
    <div className="wrapper-select">
      <button className="button-sign" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};

export default SelectButton;
