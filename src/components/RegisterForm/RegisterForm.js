import { useDispatch } from 'react-redux';
import { register } from '../../redax/auth/authOperations';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onHandleClick = e => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <form autoComplete="off" onSubmit={onHandleClick}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
