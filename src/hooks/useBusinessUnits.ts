import { useContext } from "react";
import { BusinessUnitContext } from "../context";

const useBusinessUnits = () => {
  return useContext(BusinessUnitContext);
};

export default useBusinessUnits;
