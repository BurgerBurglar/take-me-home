import { Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" pt={5}>
        {children}
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
