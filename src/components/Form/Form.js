import React, { useContext } from 'react';
import { useInput } from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import { MessageContext } from '../../context/context';
import './Form.scss';

const Form = ({ title, handleSubmit }) => {
  const email = useInput('', { isEmpty: true, minLength: 3 });
  const pass = useInput('', { isEmpty: true, minLength: 6 });
  const context = useContext(MessageContext);

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
          onFocus={(e) => email.onBlur(e)}
          placeholder="email"
          required
        />
        {email.isDirty && email.isEmpty && (
          <div className="error">{context.email}</div>
        )}

        <input
          type="password"
          value={pass.value}
          onChange={(e) => pass.onChange(e)}
          onFocus={(e) => pass.onBlur(e)}
          placeholder="password"
          required
        />
        {pass.isDirty && pass.minLengthError && (
          <div className="error">{context.password}</div>
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
