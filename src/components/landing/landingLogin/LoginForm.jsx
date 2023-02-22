import styles from "./LoginForm.module.css";
import { Form, Button, Container } from "react-bootstrap";

import { useLoginMutation } from "../../../redux/api/questifyApi";

import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    const credentials = { email, password };
    await login(credentials)
    unwrap()
      .then(({ accessToken,
        userData: { email, id, cards }, }) => localStorage.setItem('token', accessToken))
      .catch(() => {
        toast.warn('Please check your email address or password', {
          icon: "🦄", theme: "dark"
        });
      });

    const token = localStorage.getItem('token');
    dispatch(login(token))
    navigate("/dashboard")
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
        <Button className={styles.buttonGo} type="submit">go!</Button>
      </Form>
    </Container>
  );
};