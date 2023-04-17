import { RegisterForm } from "../../components";
import { RegisterProvider } from "../../context";

const Register = () => {
  return (
    <RegisterProvider>
      <RegisterForm />
    </RegisterProvider>
  );
};

export default Register;
