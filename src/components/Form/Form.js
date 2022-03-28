import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import './Form.scss';

const Form = ({ title, handleSubmit }) => {
  const email = useInput('', { isEmpty: true, minLength: 3 });
  const pass = useInput('', { isEmpty: true, minLength: 6 });

  const submitHandler = (event) => {
    event.preventDefault();
    handleSubmit(email, pass);
  };

  return (
    <div className="wrapper-form">
      <form className="box" onSubmit={submitHandler}>
        <Link className="link-home" to="/">
          MyFilm
        </Link>
        <input
          type="email"
          name="email"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          placeholder="email"
        />
        {email.isDirty && email.isEmpty && (
          <div className="error">{'Некорректный email'}</div>
        )}

        <input
          type="password"
          value={pass.value}
          onChange={(e) => pass.onChange(e)}
          onBlur={(e) => pass.onBlur(e)}
          placeholder="password"
        />
        {pass.isDirty && pass.minLengthError && (
          <div className="error">
            {'Пароль не должно быть короче 6-х символов'}
          </div>
        )}

        <button className="button-submit" type="submit">
          {title}
        </button>

        {title === 'Sign In' ? (
          <p className="register-text">
            {" I don't have an account "}

            <Link className="register-link" to="/signUp">
              {'Sign Up'}
            </Link>
          </p>
        ) : (
          <p className="register-text">
            {' I have an account '}

            <Link className="register-link" to="/signIn">
              {'Sign In'}
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export { Form };
