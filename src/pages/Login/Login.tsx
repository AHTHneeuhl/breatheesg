import { LoginForm } from "../../components";
import { LoginProvider } from "../../context";

const Login = () => {
  return (
    <LoginProvider>
      <LoginForm />
    </LoginProvider>
  );
};

export default Login;
