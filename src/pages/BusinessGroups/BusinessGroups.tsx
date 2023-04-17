import { Box } from "@chakra-ui/react";
import { GroupList } from "../../components";
import { BusinessGroupsProvider } from "../../context";

const BusinessGroups = () => {
  return (
    <BusinessGroupsProvider>
      <Box maxW="84%" mx="auto">
        <GroupList />
      </Box>
    </BusinessGroupsProvider>
  );
};

export default BusinessGroups;
