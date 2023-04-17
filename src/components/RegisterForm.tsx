import { Button, Input } from "@chakra-ui/react";
import { Formik } from "formik";
import { registerFormValidation } from "../config";
import { useRegister } from "../hooks";

const initialFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  role: "",
  password: "",
  password2: "",
};

const Register: React.FC = () => {
  const { handleRegister } = useRegister();

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={registerFormValidation}
      onSubmit={handleRegister}
    >
      {({ handleSubmit, errors, values, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <Input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && <div>{errors.firstName}</div>}
          <Input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && <div>{errors.lastName}</div>}
          <Input
            name="username"
            value={values.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
          {errors.username && <div>{errors.username}</div>}
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
          {errors.email && <div>{errors.email}</div>}
          <Input
            name="role"
            value={values.role}
            onChange={handleChange}
            type="text"
            placeholder="Role"
          />
          {errors.role && <div>{errors.role}</div>}
          <Input
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
          {errors.password && <div>{errors.password}</div>}
          <Input
            name="password2"
            value={values.password2}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.password2 && <div>{errors.password2}</div>}
          <Button type="submit">Register</Button>
        </form>
      )}
    </Formik>
  );
};

export default Register;
