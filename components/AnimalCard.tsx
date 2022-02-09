import { Box, Flex, Heading, Stack, Tag, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { Animal } from "../types/animals";
import NextImage from "./NextImage";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const overview = [animal.species, animal.gender, animal.age];
  const topTags = animal.tags.slice(0, 3);
  return (
    <>
      <Flex
        direction="column"
        border="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden"
        shadow="md"
      >
        <NextImage
          src={animal.primary_photo_cropped!.small}
          alt={animal.name}
          w="full"
          h="300px"
        />
        <Stack direction="column" spacing={2} justify="center" p={5} pt={3}>
          <Heading as="h3" color="purple.700">
            {animal.name}
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
          <Text>{overview.join(" · ")}</Text>
          <Text>{animal.breeds.primary}</Text>
          <Wrap>
            {topTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Wrap>
        </Stack>
      </Flex>
    </>
  );
};
export default AnimalCard;
