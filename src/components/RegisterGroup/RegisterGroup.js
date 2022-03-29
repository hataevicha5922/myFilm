import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterGroup.scss';

const RegisterGroup = () => {
  return (
    <div className="wrapper-button-group">
      <Link className="button-sign" to="/signIn">
        SignIn
      </Link>
      <Link className="button-sign" to="/signUp">
        SignUp
      </Link>
    </div>
  );
};

export default RegisterGroup;
