import styles from "./Landing.module.css";
import { toast } from 'react-toastify';
import { Form, Button, Container } from "react-bootstrap";
import { useRegisterMutation } from "../../redux/api/questifyApi";

export const RegisterForm = () => {
	const [register, {error}] = useRegisterMutation();

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
			<Form className="border rounded p-4" onSubmit={handleSubmit}>
				<p className={styles.paragraph__form}>Please Sign up</p>
				<Form.Group className="mb-3" controlId="inputName">
					<Form.Label>Username</Form.Label>
					<Form.Control
						className={styles.input__form}
						type="name"
						name="name"
						title="For example: John Doe"
						required
					/>
				</Form.Group>
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
					<Form.Text className="text-muted">
						Your passowrd should consist of at least four characters and contain any letters from a to z and any numbers from 0 through 9.
					</Form.Text>
				</Form.Group>
				<Button className={styles.buttonGo} type="submit">
					go!
				</Button>
			</Form>
		</Container>
	);
};
