import { createContext } from "react";
import { login } from "../api";
import { ILogin } from "../api/login";
import { useNotification, useReactQuery } from "../hooks";

type TLoginContext = {
  handleLogin: (values: ILogin) => void;
  isLoading: boolean;
};

export const LoginContext = createContext<TLoginContext>({
  handleLogin: () => {},
  isLoading: false,
});

const LoginProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const notification = useNotification();

  const { execute: loginBreathe, isLoading } = useReactQuery(login, {
    onSuccess: (data) => {
      notification.notifySuccess("Login successful");
    },
  });

  const handleLogin = (values: ILogin) => loginBreathe(values);

  return (
    <LoginContext.Provider value={{ handleLogin, isLoading }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
