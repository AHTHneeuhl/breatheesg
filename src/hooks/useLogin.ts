import { useContext } from "react";
import { LoginContext } from "../context";

const useLogin = () => {
  return useContext(LoginContext);
};

export default useLogin;
