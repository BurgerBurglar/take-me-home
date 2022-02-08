import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface NavbarProps extends FlexProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return <Flex {...props} bg="purple.600" h="3rem"></Flex>;
};
export default Navbar;
