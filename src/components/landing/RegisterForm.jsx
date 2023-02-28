import styles from "./Landing.module.css";
import { Form, Button, Container } from "react-bootstrap";
import { useRegisterMutation } from "../../redux/api/questifyApi";

export const RegisterForm = () => {
	const [register] = useRegisterMutation();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const form = evt.currentTarget;
		const name = form.elements.name.value;
		const email = form.elements.email.value;
		const password = form.elements.password.value;

		const credentials = { name, email, password };
		await register(credentials);

		form.reset();
	};

	return (
		<Container className={styles.container__form}>
			<Form className="border rounded p-4" onSubmit={handleSubmit}>
				{/* <p className={styles.paragraph__form}>Please Sign up</p> */}
				<Form.Group className="mb-3" controlId="inputName">
					<Form.Label className={styles.paragraph__form}>Username</Form.Label>
					<Form.Control
						className={styles.input__form}
						type="name"
						name="name"
						title="For example: John Doe"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="inputEmail">
					<Form.Label className={styles.paragraph__form}>E-mail</Form.Label>
					<Form.Control
						className={styles.input__form}
						type="email"
						name="email"
						title="For example: example@email.com"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="inputPassword">
					<Form.Label className={styles.paragraph__form}>Password</Form.Label>
					<Form.Control
						className={styles.input__form}
						type="password"
						name="password"
						title="Minimum 8 characters"
						minLength="8"
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
