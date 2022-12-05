import { NavLink } from 'react-router-dom';
import { selectisLoggedIn } from '../../redax/auth/authSelectors';
import { useSelector } from 'react-redux';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  // console.log('isLoggedIn navigation', isLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn && <NavLink to="/phonebook">Phonebook</NavLink>}
    </nav>
  );
};
