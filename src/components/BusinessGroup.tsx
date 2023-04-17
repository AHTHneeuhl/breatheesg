import { Box, Heading, Text } from "@chakra-ui/react";

type TProps = {
  name: string;
  description: string;
};

const BusinessGroup: React.FC<TProps> = ({ name, description }) => {
  return (
    <Box p={4} border="1px" boxShadow="md" borderColor="blackAlpha.100">
      <Heading fontSize="2xl" fontWeight="medium" mb={2}>
        {name}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default BusinessGroup;
