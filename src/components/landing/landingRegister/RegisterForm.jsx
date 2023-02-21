import styles from './RegisterForm.module.css';
import { Form, Button, Container } from 'react-bootstrap';
//import { register } from "../../../redux/";
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from "../../../redux/api/questifyApi";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    navigate("/dashboard");
    form.reset();
  
  };

  return (
    <Container className={styles.container}>
      <Form className="border rounded p-4" onSubmit={handleSubmit}>
        <p className={styles.paragraph}>Please Sign In</p>
        <Form.Group className="mb-3" controlId="inputName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className={styles.input}
            type="name"
            name="name"
            title="For example: John Doe"
            required
          />
        </Form.Group>
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