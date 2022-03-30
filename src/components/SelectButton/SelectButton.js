import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../api/apiHandler/getDataBase';
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
      <button onClick={() => navigate('/history')}>History</button>
      {/* <select
        name="select"
        id="header-select"
        className="header-select"
        onChange={handleSettings}
        value="settings"
      >
        {' '}
        <option className="option" value="settings" disabled>
          Settings
        </option>
        <option option className="option" value="history">
          History
        </option>
        <option option className="option" value="logOut">
          Logout
        </option>
      </select> */}
    </div>
  );
};

export default SelectButton;
