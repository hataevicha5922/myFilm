import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '../Form/Form';
import { setUser } from '../../store/user';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
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
      .catch(() => navigate('*'));
  };

  return (
    <div>
      <Form title="Sign Up" handleSubmit={handleRegister} />
    </div>
  );
}
