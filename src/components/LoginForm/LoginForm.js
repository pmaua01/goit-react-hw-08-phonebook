import { useDispatch } from 'react-redux';
import { login } from 'redax/auth/authOperations';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const onHandleClick = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form autoComplete="off" onSubmit={onHandleClick}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
