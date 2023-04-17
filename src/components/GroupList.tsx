import { Box, Heading } from "@chakra-ui/react";
import { useAppSelector } from "../redux/store/hooks";
import BusinessGroup from "./BusinessGroup";
import AddBusinessGroup from "./AddBusinessGroup";

const GroupList = () => {
  const groups = useAppSelector((state) => state.business.groups.groups);

  return (
    <Box>
      <Box display="flex" justifyContent="space-around" my={8}>
        <Heading fontSize="3xl" fontWeight="medium" textAlign="center">
          Business Groups
        </Heading>
        <AddBusinessGroup />
      </Box>
      <Box display="grid" gridGap={4} gridTemplateColumns="repeat(5, 1fr)">
        {groups.map(({ id, name, description }) => (
          <BusinessGroup key={id} name={name} description={description} />
        ))}
      </Box>
    </Box>
  );
};

export default GroupList;
