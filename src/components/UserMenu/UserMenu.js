import { useSelector } from 'react-redux';
import { selectUser } from 'redax/auth/authSelectors';
import { logOut } from 'redax/auth/authOperations';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // console.log('UserMenu selectuser', user);
  const userName = user.name;

  const onHandleClick = e => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={onHandleClick}>
        LogOut
      </button>
    </div>
  );
};
