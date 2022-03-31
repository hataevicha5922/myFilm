import React from 'react';
import { Button } from '../Button/Button';

const RegisterGroup = () => {
  return (
    <div className="wrapper-button-group">
      <Button title="SignIn" path="/signIn" />
      <Button title="SignUp" path="/signUp" />
    </div>
  );
};

export default RegisterGroup;
