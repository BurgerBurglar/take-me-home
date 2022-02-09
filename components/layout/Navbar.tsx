import {
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Select,
  Spacer,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useParams } from "../../context/params";
import useScreenSize from "../../utils/useScreenSize";
import { GiHamburgerMenu } from "react-icons/gi";
import nullifyEmpty from "../../utils/nullifyEmpty";
import { useRouter } from "next/router";

const Navbar: React.FC = (props) => {
  const isLargeScreen = useScreenSize("md");

  const Filters: React.FC = () => {
    const router = useRouter();

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
      const realName = nullifyEmpty(name);
      router.push("/");
      setParams((prev) => ({
        ...prev,
        name: realName,
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
      <>
        <VisuallyHidden>name</VisuallyHidden>
        <Input
          name="name"
          w={isLargeScreen ? "12em" : "full"}
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
        <VisuallyHidden>zipcode</VisuallyHidden>
        <Input
          name="location"
          w={isLargeScreen ? "9em" : "full"}
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
          w={isLargeScreen ? "9em" : "full"}
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
        <IconButton
          icon={<MdSearch />}
          aria-label="search"
          colorScheme="purple"
          onClick={searchName}
        />
      </>
    );
  };

  return (
    <Flex {...props} bg="purple.600" align="center" color="white" h="3rem">
      <Container maxW="container.xl" display="flex" alignContent="center">
        <Heading as="h1" fontSize="2rem">
          Pet Finder
        </Heading>
        <Spacer />
        {isLargeScreen ? (
          <HStack spacing={3}>
            <Filters />
          </HStack>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="outline"
            />
            <MenuList bgColor="purple.700" p={2}>
              <VStack align="flex-end">
                <Filters />
              </VStack>
            </MenuList>
          </Menu>
        )}
      </Container>
    </Flex>
  );
};
export default Navbar;
