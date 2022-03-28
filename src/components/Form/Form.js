import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  let navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    handleClick(email, pass);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button type="submit">{title}</button>
    </form>
  );
};

export { Form };
