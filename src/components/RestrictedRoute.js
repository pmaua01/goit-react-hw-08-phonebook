import { Navigate } from 'react-router-dom';

import { selectisLoggedIn } from '../redax/auth/authSelectors';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  // console.log('Restricted isLoggedIn', isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
