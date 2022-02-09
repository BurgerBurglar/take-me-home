import {
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "../../context/params";

const isValidLocation = (zipcode: string) => zipcode.length === 5;

const Navbar: React.FC = (props) => {
  const { params, setParams } = useParams();
  const [zipcode, setZipcode] = useState("");

  const handleZipcodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  useEffect(() => {
    if (!isValidLocation(zipcode)) return;
    setParams((prev) => ({
      ...prev,
      location: zipcode,
    }));
  }, [setParams, zipcode]);

  const handleDistanceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParams((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Flex {...props} bg="purple.600" align="center" color="white" h="3rem">
      <Container maxW="container.xl" display="flex" alignContent="center">
        <Heading as="h1" fontSize="2rem">
          Pet Finder
        </Heading>
        <Spacer />
        <HStack spacing={3}>
          <Text fontSize="1.2rem">zipcode:</Text>
          <Input
            name="location"
            w="9em"
            bgColor="purple.500"
            value={zipcode}
            onChange={handleZipcodeChange}
          />
          <Text fontSize="1.2rem">distance:</Text>
          <Select
            name="distance"
            value={params.distance}
            onChange={handleDistanceChange}
            defaultValue={100}
            sx={{
              option: {
                bgColor: "purple.500",
              },
            }}
          >
            <option value={25}>25 miles</option>
            <option value={50}>50 miles</option>
            <option value={100}>100 miles</option>
            <option value={500}>500 miles</option>
          </Select>
        </HStack>
      </Container>
    </Flex>
  );
};
export default Navbar;
