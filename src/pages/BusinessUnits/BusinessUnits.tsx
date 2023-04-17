import { Box } from "@chakra-ui/react";
import { UnitList } from "../../components";
import { BusinessUnitsProvider } from "../../context";

const BusinessUnits = () => {
  return (
    <BusinessUnitsProvider>
      <Box maxW="84%" mx="auto">
        <UnitList />
      </Box>
    </BusinessUnitsProvider>
  );
};

export default BusinessUnits;
