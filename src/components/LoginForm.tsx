import { Box, Button, Input } from "@chakra-ui/react";
import { Formik } from "formik";
import { loginFormValidation } from "../config";
import { useLogin } from "../hooks";

const initialFormValues = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const { handleLogin, isLoading } = useLogin();

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={loginFormValidation}
      onSubmit={handleLogin}
    >
      {({ handleSubmit, errors, values, handleChange }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "24rem",
            margin: "5rem auto 0",
          }}
        >
          <Input
            name="username"
            value={values.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
          {errors.username && <div>{errors.username}</div>}
          <Input
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
          {errors.password && <div>{errors.password}</div>}
          <Button type="submit" isLoading={isLoading}>
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
