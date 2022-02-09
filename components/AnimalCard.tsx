import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { Animal } from "../types/animals";
import defaultPic from "../utils/defaultPic";
import NextImage from "./NextImage";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const overview = [animal.species, animal.gender, animal.age];
  const topTags = animal.tags.slice(0, 3);
  return (
    <>
      <LinkBox
        display="flex"
        flexDir="column"
        border="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden"
        shadow="md"
        _hover={{
          bgColor: "purple.50",
          shadow: "lg",
          transform: "translateY(-0.1rem)",
          transition: "transform 0.2s ease-in",
        }}
      >
        <NextImage
          src={animal.primary_photo_cropped?.small ?? defaultPic(animal)}
          alt={animal.name}
          w="full"
          h="300px"
        />
        <Stack direction="column" spacing={2} justify="center" p={5} pt={3}>
          <Heading as="h3" fontSize="1.8rem" color="purple.700">
            <NextLink href={`/animal/${animal.id}`} passHref>
              <LinkOverlay>{animal.name}</LinkOverlay>
            </NextLink>
            {animal.distance === null ? null : (
              <Box
                as="span"
                fontSize="1.2rem"
                fontWeight="normal"
                color="gray.500"
              >
                , {parseInt(animal.distance)} miles
              </Box>
            )}
          </Heading>
          <Box fontSize="0.9rem" color="gray.700">
            <Text>{overview.join(" · ")}</Text>
            <Text>{animal.breeds.primary}</Text>
          </Box>
          <Wrap>
            {topTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Wrap>
        </Stack>
      </LinkBox>
    </>
  );
};
export default AnimalCard;
