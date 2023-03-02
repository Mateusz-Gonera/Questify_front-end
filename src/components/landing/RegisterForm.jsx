import styles from "./Landing.module.css";
import { toast } from "react-toastify";
import { Form, Button, Container } from "react-bootstrap";
import { useRegisterMutation } from "../../redux/api/questifyApi";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
	const navigate = useNavigate();
	const [register, { error }] = useRegisterMutation();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const form = evt.currentTarget;
		const name = form.elements.name.value;
		const email = form.elements.email.value;
		const password = form.elements.password.value;

		const credentials = { name, email, password };
		await register(credentials)
			.unwrap()
			.then()
			.catch((error) => {
				toast.error(error.data.message, {
					theme: "dark",
				});
			});
		form.reset();
	};

	return (
		<Container className={styles.container__form}>
			<p className={styles.landingTekst}>
				Choose your name to sign up or{" "}
				<button
					onClick={() => navigate("/login")}
					className={styles.textButton}
				>
					log in
				</button>
			</p>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="inputName">
					<Form.Control
						className={styles.input__form}
						type="name"
						name="name"
						placeholder="Username"
						title="For example: John Doe"
						required
					/>
				</Form.Group>
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

					<small id="passwordHelpBlock" className={styles.password__form}>
						Your password must be 4-20 characters long, contain letters and
						numbers, and must not contain spaces, special characters, or emoji.
					</small>
				</Form.Group>
				<Button className={styles.buttonGo} type="submit">
					&nbsp;go!
				</Button>
			</Form>
		</Container>
	);
};
