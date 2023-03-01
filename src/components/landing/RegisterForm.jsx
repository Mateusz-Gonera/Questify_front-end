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
						title="Minimum 4 characters"
						minLength="4"
						required
					/>
						<small id="passwordHelpBlock" className={styles.password__form}>
 	 						Your password must be 4-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
						</small>
					
				</Form.Group>
				<Button className={styles.buttonGo} type="submit">
					go!
				</Button>
			</Form>
		</Container>
	);
};
