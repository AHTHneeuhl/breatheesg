import { AddBusinessUnit, UnitList } from "../../components";
import { BusinessUnitsProvider } from "../../context";

const BusinessUnits = () => {
  return (
    <BusinessUnitsProvider>
      <AddBusinessUnit />
      <UnitList />
    </BusinessUnitsProvider>
  );
};

export default BusinessUnits;
