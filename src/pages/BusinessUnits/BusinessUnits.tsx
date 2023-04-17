import { AddBusinessUnit } from "../../components";
import { BusinessUnitsProvider } from "../../context";

const BusinessUnits = () => {
  return (
    <BusinessUnitsProvider>
      <AddBusinessUnit />
    </BusinessUnitsProvider>
  );
};

export default BusinessUnits;
