import { createContext } from "react";
import { login } from "../api";
import { useMutation } from "@tanstack/react-query";
import { ILogin } from "../api/login";

type TLoginContext = {
  handleLogin: (values: ILogin) => void;
};

export const LoginContext = createContext<TLoginContext>({
  handleLogin: () => {},
});

const LoginProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { mutate: loginBreathe } = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleLogin = (values: ILogin) => loginBreathe(values);

  return (
    <LoginContext.Provider value={{ handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
