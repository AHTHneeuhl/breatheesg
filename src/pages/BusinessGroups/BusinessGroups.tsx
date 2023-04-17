import { AddBusinessGroup, GroupList } from "../../components";
import { BusinessGroupsProvider } from "../../context";

const BusinessGroups = () => {
  return (
    <BusinessGroupsProvider>
      <AddBusinessGroup />
      <GroupList />
    </BusinessGroupsProvider>
  );
};

export default BusinessGroups;
