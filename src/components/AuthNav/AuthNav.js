import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : undefined}`
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : undefined}`
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};
