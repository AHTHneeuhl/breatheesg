import { Box, Heading } from "@chakra-ui/react";
import { useAppSelector } from "../redux/store/hooks";
import BusinessUnit from "./BusinessUnit";
import AddBusinessUnit from "./AddBusinessUnit";

const UnitList = () => {
  const units = useAppSelector((state) => state.business.units.units);

  return (
    <Box>
      <Box display="flex" justifyContent="space-around" my={8}>
        <Heading fontSize="3xl" fontWeight="medium">
          Business Units
        </Heading>
        <AddBusinessUnit />
      </Box>
      <Box display="grid" gridGap={4} gridTemplateColumns="repeat(4, 1fr)">
        {units.map(
          ({
            id,
            name,
            address,
            industry,
            sector,
            state,
            type,
            description,
          }) => (
            <BusinessUnit
              key={id}
              name={name}
              address={address}
              industry={industry}
              sector={sector}
              state={state}
              type={type}
              description={description}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default UnitList;
