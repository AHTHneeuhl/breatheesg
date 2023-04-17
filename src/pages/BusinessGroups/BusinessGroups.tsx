import { AddBusinessGroup } from "../../components";
import { BusinessGroupsProvider } from "../../context";

const BusinessGroups = () => {
  return (
    <BusinessGroupsProvider>
      <AddBusinessGroup />
    </BusinessGroupsProvider>
  );
};

export default BusinessGroups;
