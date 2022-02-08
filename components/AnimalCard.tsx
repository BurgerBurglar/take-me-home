import { Flex, Heading, Stack, Tag, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { Animal } from "../types/animals";
import htmlUnescape from "../utils/htmlUnescape";
import NextImage from "./NextImage";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const overview = [animal.species, animal.gender, animal.age];
  const topTags = animal.tags.slice(0, 3);
  const description = htmlUnescape(animal.description);
  return (
    <>
      <Flex
        border="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden"
        shadow="md"
      >
        <NextImage
          src={animal.primary_photo_cropped!.small}
          alt={animal.name}
          w="300px"
          h="400px"
        />
        <Stack direction="column" spacing={2} justify="center" p={3}>
          <Heading as="h3">{animal.name}</Heading>
          <Text>{overview.join(" · ")}</Text>
          <Text>{animal.breeds.primary}</Text>
          <Wrap>
            {topTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Wrap>
          <Text
            as="blockquote"
            noOfLines={4}
            borderLeft="solid 0.5rem"
            borderColor="gray.400"
            pl={3}
          >
            {description}
          </Text>
        </Stack>
      </Flex>
    </>
  );
};
export default AnimalCard;
