import {
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Select,
  Spacer,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "../../context/params";
import { MdSearch } from "react-icons/md";

const Navbar: React.FC = (props) => {
  const { params, setParams } = useParams();
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");

  const isValidLocation = zipcode.length === 5;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleZipcodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  const searchName = () => {
    setParams((prev) => ({
      ...prev,
      name,
    }));
  };

  useEffect(() => {
    if (!isValidLocation) return;
    setParams((prev) => ({
      ...prev,
      location: zipcode,
    }));
  }, [isValidLocation, setParams, zipcode]);

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
          <VisuallyHidden>name</VisuallyHidden>
          <Input
            name="name"
            w="15em"
            bgColor="purple.500"
            placeholder="name..."
            _placeholder={{
              color: "gray.300",
            }}
            value={name}
            onChange={handleNameChange}
            onKeyDown={(e) => {
              e.key === "Enter" && searchName();
            }}
          />
          <IconButton
            icon={<MdSearch />}
            aria-label="search"
            colorScheme="purple"
            onClick={searchName}
          />
          <VisuallyHidden>zipcode</VisuallyHidden>
          <Input
            name="location"
            w="9em"
            bgColor="purple.500"
            placeholder="zipcode..."
            _placeholder={{
              color: "gray.300",
            }}
            value={zipcode}
            onChange={handleZipcodeChange}
          />
          <VisuallyHidden>distance</VisuallyHidden>
          <Select
            name="distance"
            isDisabled={!isValidLocation}
            value={params.distance}
            onChange={handleDistanceChange}
            defaultValue={100}
            w="8rem"
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
