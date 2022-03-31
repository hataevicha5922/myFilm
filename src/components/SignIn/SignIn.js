import * as React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/user/index';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch((error) => navigate('*'));
  };

  return (
    <div>
      <Form title="Sign In" handleSubmit={handleSubmit} />;
    </div>
  );
}
