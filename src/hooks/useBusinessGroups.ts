import { useContext } from "react";
import { BusinessGroupContext } from "../context";

const useBusinessGroups = () => {
  return useContext(BusinessGroupContext);
};

export default useBusinessGroups;
