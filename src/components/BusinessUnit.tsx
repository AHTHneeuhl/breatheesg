import { Box, Heading, Text } from "@chakra-ui/react";

type TProps = {
  name: string;
  address: string;
  industry: string;
  sector: string;
  state: string;
  type: string;
  description: string;
};

const BusinessUnit: React.FC<TProps> = ({
  name,
  address,
  industry,
  sector,
  state,
  type,
  description,
}) => {
  return (
    <Box p={4} border="1px" boxShadow="md" borderColor="blackAlpha.100">
      <Heading fontSize="2xl" fontWeight="medium" mb={2}>
        {name}
      </Heading>
      <Text>{address}</Text>
      <Text>{industry}</Text>
      <Text>{sector}</Text>
      <Text>{state}</Text>
      <Text>{type}</Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default BusinessUnit;
