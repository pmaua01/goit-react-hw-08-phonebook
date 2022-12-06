import { useSelector } from 'react-redux';
import { selectUser } from 'redax/auth/authSelectors';
import { logOut } from 'redax/auth/authOperations';
import { useDispatch } from 'react-redux';
import css from '../UserMenu/UserMenu.module.css';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userName = user.name;

  const onHandleClick = e => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <Button variant="contained" type="button" onClick={onHandleClick}>
        LogOut
      </Button>
    </div>
  );
};
