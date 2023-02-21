import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be at least 8 characters")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
});

export default validationSchema;