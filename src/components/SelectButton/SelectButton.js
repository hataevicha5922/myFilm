import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectButton.scss';

const SelectButton = () => {
  const navigate = useNavigate();
  const handleSettings = (e) => {
    switch (e.target.value) {
      case 'history':
        navigate('/signIn');
        break;
      case 'logOut':
        alert('logOut');
        break;
      default:
        return 'settings';
    }
  };
  return (
    <div className="wrapper-select">
      <select
        name="select"
        id="header-select"
        className="header-select"
        onChange={handleSettings}
      >
        {' '}
        <option className="option" value="settings" selected>
          Settings
        </option>
        <option option className="option" value="history">
          History
        </option>
        <option option className="option" value="logOut">
          Logout
        </option>
      </select>
    </div>
  );
};

export default SelectButton;
