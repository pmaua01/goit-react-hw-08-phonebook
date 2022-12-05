import { NavLink } from 'react-router-dom';
import { selectisLoggedIn } from '../../redax/auth/authSelectors';
import { useSelector } from 'react-redux';
import css from '../Navigation/Navigation.module.css';
import HomeIcon from '@mui/icons-material/Home';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  // console.log('isLoggedIn navigation', isLoggedIn);
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : undefined}`
        }
        to="/"
      >
        <HomeIcon />
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : undefined}`
          }
          to="/phonebook"
        ></NavLink>
      )}
    </nav>
  );
};
