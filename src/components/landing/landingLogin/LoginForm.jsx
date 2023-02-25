import styles from './LoginForm.module.css';
import { Form, Button, Container } from 'react-bootstrap';
import { useLoginMutation } from '../../../redux/api/questifyApi';
import { toast } from 'react-toastify';
// import { useDispatch } from "react-redux";

// import {
//   setUser,
//   setToken,

// } from "../../../redux/slices/authSlice";

export const LoginForm = () => {
  //   const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async evt => {
    evt.preventDefault();

		const credentials = { email, password };
		await login(credentials)
			.unwrap()
			.then(({ accessToken, userData: { email, id, cards } }) =>
				localStorage.setItem("token", accessToken),
			)
			.catch(() => {
				toast.warn("Please check your email address or password", {
					icon: "🦄",
					e: "dark",
				});
			});

		const token = localStorage.getItem("token");
		await login(token);
		navigate("/dashboard");
		form.reset();
	};

    await login(credentials)
      .unwrap()
      .then(({ accessToken, userData: { email, id, cards } }) => {
        localStorage.setItem('token', accessToken);
        // if (accessToken) {
        //   dispatch(setUser({ email, id, cards }));
        // }
      })
      .catch(() => {
        toast.warn('Please check your email address or password', {
          theme: 'dark',
        });
      });
    // const token = localStorage.getItem("token");

    // dispatch(setToken(token));
    form.reset();
  };

  return (
    <Container className={styles.container}>
      <Form className="border rounded p-4" onSubmit={handleSubmit}>
        <p className={styles.paragraph}>Please log in</p>
        <Form.Group className="mb-3" controlId="inputEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            className={styles.input}
            type="email"
            name="email"
            title="For example: example@email.com"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={styles.input}
            type="password"
            name="password"
            title="Minimum 4 characters"
            minLength="4"
            required
          />
        </Form.Group>
        <Button className={styles.buttonGo} type="submit">
          go!
        </Button>
      </Form>
    </Container>
  );
};
