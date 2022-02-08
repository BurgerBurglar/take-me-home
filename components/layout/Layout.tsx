import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" pt={5}>
        {children}
      </Container>
    </>
  );
};
export default Layout;
