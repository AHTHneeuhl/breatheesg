import { useContext } from "react";
import { RegisterContext } from "../context";

const useRegister = () => {
  return useContext(RegisterContext);
};

export default useRegister;
