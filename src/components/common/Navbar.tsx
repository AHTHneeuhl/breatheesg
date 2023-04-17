import { Box } from "@chakra-ui/react";
import { Link as NavLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box px="32" py={4} display="flex" gap={6} boxShadow="md">
      <Link to="/business-groups">
        <NavLink>Business Groups</NavLink>
      </Link>
      <Link to="/business-units">
        <NavLink>Business Units</NavLink>
      </Link>
    </Box>
  );
};

export default Navbar;
