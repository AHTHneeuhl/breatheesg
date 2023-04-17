import { createContext } from "react";
import { register } from "../api";
import { useMutation } from "@tanstack/react-query";
import { IRegister } from "../api/register";

type TRegisterContext = {
  handleRegister: (values: IRegister) => void;
};

export const RegisterContext = createContext<TRegisterContext>({
  handleRegister: () => {},
});

const RegisterProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { mutate: loginBreathe } = useMutation(register, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleRegister = (values: IRegister) => loginBreathe(values);

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
