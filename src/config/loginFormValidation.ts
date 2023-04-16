import * as Yup from "yup";

export const loginFormValidation = Yup.object({
  email: Yup.string().email(),
  password: Yup.string().min(6),
});
