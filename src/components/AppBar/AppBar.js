import { selectisLoggedIn } from '../../redax/auth/authSelectors';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  // console.log(isLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
