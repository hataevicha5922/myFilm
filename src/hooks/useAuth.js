import { useSelector } from 'react-redux';

export function useAuth() {
  const { email } = useSelector((state) => state.user);
  // console.log(user.email);
  return {
    isAuth: !!email,
    userEmail: email,
  };
}
