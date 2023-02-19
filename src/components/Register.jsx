import {useRegisterMutation } from '../redux/api/questifyApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const RegisterForm = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
 
  const handleSubmit = async evt => {
    const form = evt.target;
    const {
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { email, password };

    evt.preventDefault();

    await register(credentials)
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => {
        toast.warn('User with this email address already exists', {
  icon: "🦄",  theme: "dark"
});
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" >
      <label >
      </label>
      <label >
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder='email'
        //   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </label>
      <label >
        <input
          label="Password"
          type="password"
        //   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          name="password"
          autoComplete="off"
        placeholder='password'
        />
      </label>
      <button type="submit">
        Register
      </button>
    </form>
  );
};
