import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '../Form/Form';
import { setUser } from '../../store/user';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      <Form title="Sign Up" handleSubmit={handleRegister} />
    </div>
  );
}
