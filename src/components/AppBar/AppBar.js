import { selectisLoggedIn } from '../../redax/auth/authSelectors';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import css from '../AppBar/AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
