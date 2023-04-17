import * as Yup from "yup";

export const registerFormValidation = Yup.object({
  email: Yup.string().email().required("Email is required"),
  username: Yup.string().required("Username is required"),
  role: Yup.string().required("Role is required"),
  password: Yup.string().min(8).required("Password is required"),
});
