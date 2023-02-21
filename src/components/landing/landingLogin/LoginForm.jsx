import styles from "./LoginForm.module.css";
import { Form, Button, Container } from "react-bootstrap";
//import { logIn } from "../../../redux/";
import { useLoginMutation } from "../../../redux/api/questifyApi";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [logIn] = useLoginMutation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      logIn({
        email,
        password,
      })
    );
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