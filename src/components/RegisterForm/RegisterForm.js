import { useDispatch } from 'react-redux';
import { register } from '../../redax/auth/authOperations';
import css from '../RegisterForm/Register.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
    <form className={css.form} autoComplete="off" onSubmit={onHandleClick}>
      <label className={css.label}>
        <TextField label="Username" variant="filled" type="text" name="name" />
      </label>
      <label className={css.label}>
        <TextField label="Email" variant="filled" type="email" name="email" />
      </label>
      <label className={css.label}>
        <TextField
          label="Password"
          variant="filled"
          type="password"
          name="password"
        />
      </label>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
};
