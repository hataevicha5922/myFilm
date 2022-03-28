import * as React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setUser } from '../../store/user/index';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Form title="Sign In" handleSubmit={handleSubmit} />;
    </div>
  );
}
