import { useState } from "react";
import { useLoginMutation } from "../../../redux/api/questifyApi";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import validationSchema from "../../../schemas/formValidation";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LandingModal from "../landingModal/LandingModal";
import {
	Wrapper,
	TextFieldStyled,
	RegistrationLink,
	FormButton,
	Paragraph,
} from "./LandingForm.styled";
import { addUser } from "../../../redux/userSlice";
import { addToken } from "../../../redux/tokenSlice";

const LandingForm = () => {
	const [login] = useLoginMutation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    
    const { handleSubmit, values, handleChange, touched, errors, resetForm } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema: validationSchema,
			onSubmit: async (values) => {
				await login(values)
					.unwrap()
					.then(
						({
							accessToken,
							sid,
							refreshToken,
							userData: { email, id, cards },
                        }) => {
							Cookies.set("token", accessToken);
							if (accessToken) {
								dispatch(addUser({ email, id, cards, sid, refreshToken }));
							}
						}
					)
					.catch(() => {
						toast.warn("Please check your email address or password");
					});
				const token = Cookies.get("token");
				if (token === undefined) {
					return;
				}
				dispatch(addToken(token));
				navigate("/");
				resetForm();
			},
        });
    
    return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<Paragraph>
					Choose your name to{" "}
					<RegistrationLink onClick={() => setIsOpen(true)}>
						sign up
					</RegistrationLink>{" "}
					or log in
				</Paragraph>
				<TextFieldStyled
					fullWidth
					variant="standard"
					margin="dense"
					id="email"
					name="email"
					label="Email"
					value={values.email}
					onChange={handleChange}
					error={touched.email && Boolean(errors.email)}
					helperText={touched.email && errors.email}
				/>
				<TextFieldStyled
					fullWidth
					variant="standard"
					margin="dense"
					id="password"
					name="password"
					label="Password"
					type="password"
					value={values.password}
					onChange={handleChange}
					error={touched.password && Boolean(errors.password)}
					helperText={touched.password && errors.password}
				/>
				<FormButton color="#FF851C" variant="contained" fullWidth type="submit">
					go!
				</FormButton>
			</form>
			{isOpen && <LandingModal setIsOpen={setIsOpen} />}
		</Wrapper>
	);
};

export default LandingForm;