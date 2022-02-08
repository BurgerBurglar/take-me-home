import {
  Container,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface NavbarProps extends FlexProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Flex {...props} bg="purple.600" align="center" color="white" h="3rem">
      <Container maxW="container.lg" display="flex" alignContent="center">
        <Heading as="h1" fontSize="2rem">
          Pet Finder
        </Heading>
        <Spacer />
        <HStack spacing={3}>
          <Text fontSize="1.2rem">zipcode:</Text>
          <Input w="9em" bgColor="purple.500" />
          <Text fontSize="1.2rem">distance:</Text>
          <Select
            sx={{
              option: {
                bgColor: "purple.500",
              },
            }}
          >
            <option value={25}>25 miles</option>
            <option value={50}>50 miles</option>
            <option value={100}>100 miles</option>
            <option value="none">All locations</option>
          </Select>
        </HStack>
      </Container>
    </Flex>
  );
};
export default Navbar;
