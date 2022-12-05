import { useDispatch } from 'react-redux';
import { login } from 'redax/auth/authOperations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import css from '../LoginForm/LoginForm.module.css';
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
    <form className={css.wrapper} autoComplete="off" onSubmit={onHandleClick}>
      <label className={css.label}>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
          name="email"
        />
      </label>
      <label className={css.label}>
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
          name="password"
        />
      </label>
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </form>
  );
};
