import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box px="32" py={4} display="flex" gap={6} boxShadow="md">
      <Link to="/business-groups">Business Groups</Link>
      <Link to="/business-units">Business Units</Link>
    </Box>
  );
};

export default Navbar;
