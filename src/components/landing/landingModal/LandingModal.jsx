import {
  Wrapper,
  Modal,
  CloseBtn,
  LandingButton,
  TextFieldStyled,
  Paragraph,
} from "./LandingModal.styled";
import { IoMdClose } from "react-icons/io";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import validationSchema from "../../../schemas/formValidation";

const LandingModal = ({ setIsOpen }) => {
  const [register] = useRegisterMutation();

  const { handleSubmit, values, handleChange, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        await register(values)
          .unwrap()
          .then(({ id }) => {
            resetForm();
            setIsOpen(false);
            toast.success("Now you can use your credentials to login");
          })
          .catch(() => {
            toast.warn(`User with ${values.email} already exists`);
          });
      },
    });
  return (
    <>
      <Wrapper>
        <Modal>
          <CloseBtn onClick={() => setIsOpen(false)}>
            <IoMdClose />
          </CloseBtn>
          <Paragraph>Registration</Paragraph>
          <form onSubmit={handleSubmit}>
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
            <LandingButton
              color="#FF851C"
              variant="contained"
              fullWidth
              type="submit"
            >
              go!
            </LandingButton>
          </form>
        </Modal>
      </Wrapper>
    </>
  );
};

export default LandingModal;