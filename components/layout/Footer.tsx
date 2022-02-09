import { Center, Container, HStack } from "@chakra-ui/react";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <HStack bgColor="gray.100" color="gray.600" h="3rem" mt={5}>
      <Container maxW="container.xl">
        <Center>
          © 2022 Shuo Tian, no rights reserved, do whatever you want.
        </Center>
      </Container>
    </HStack>
  );
};
export default Footer;
