import styles from "./Landing.module.css";
import { Form, Button, Container } from "react-bootstrap";
import { useLoginMutation } from "../../redux/api/questifyApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
	const navigate = useNavigate();
	//   const dispatch = useDispatch();
	const [login, { error }] = useLoginMutation();

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
			.catch((error) => {
				toast.error(error.data.message, {
					theme: "dark",
				});
			});
	};
	// const token = localStorage.getItem("token");

	return (
		<Container className={styles.container__form}>
			<p className={styles.landingTekst}>
				Choose your name to{" "}
				<button
					onClick={() => navigate("/register")}
					className={styles.textButton}
				>
					sign up
				</button>{" "}
				or log in
			</p>

			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="inputEmail">
					<Form.Control
						className={styles.input__form}
						type="email"
						name="email"
						placeholder="Email"
						title="For example: example@email.com"
						required
					/>
				</Form.Group>
				<Form.Group controlId="inputPassword">
					<Form.Control
						className={styles.input__form}
						type="password"
						name="password"
						placeholder="Password"
						title="Minimum 4 characters"
						minLength="4"
						required
					/>
				</Form.Group>
				<Button className={styles.buttonGo} type="submit">
					&nbsp;go!
				</Button>
			</Form>
		</Container>
	);
};
