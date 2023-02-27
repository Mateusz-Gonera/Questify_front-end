import styles from "./Landing.module.css";
import { Form, Button, Container } from "react-bootstrap";
import { useLoginMutation } from "../../redux/api/questifyApi";
import { toast } from 'react-toastify';

export const LoginForm = () => {
  //   const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const {
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { email, password };

    await login(credentials)
      .unwrap()
      .then(({ accessToken, userData: { email, id, cards } }) => {
        // localStorage.setItem("token", accessToken);
        // if (accessToken) {
        //   dispatch(setUser({ email, id, cards }));
        // }
      })
      .catch(() => {
        toast.warn("Please check your email address or password", {
          theme: "dark",
        });
      });
    }
    // const token = localStorage.getItem("token");

    return (
      <Container className={styles.container__form}>
        <Form className="border rounded p-4" onSubmit={handleSubmit}>
          <p className={styles.paragraph__form}>Please log in</p>
          <Form.Group className="mb-3" controlId="inputEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              className={styles.input__form}
              type="email"
              name="email"
              title="For example: example@email.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={styles.input__form}
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
