import {
  Box,
  BoxProps,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Skeleton,
  SkeletonText,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { Animal } from "../../types/animals";
import defaultPic from "../../utils/defaultPic";
import useHover from "../../utils/useHover";
import NextImage from "../NextImage";

interface AnimalCardProps {
  animal?: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const { isHovered, handleHover } = useHover();

  const cardProps: BoxProps = {
    display: "flex",
    flexDir: "column",
    border: "1px",
    borderColor: "gray.200",
    rounded: "md",
    overflow: "hidden",
    shadow: "md",
  };

  if (animal === undefined)
    return (
      <Flex direction="column" h={426} {...cardProps}>
        <Skeleton w="full" h={300} />
        <VStack spacing={3} align="start" justify="center" p={5} pt={3}>
          <Skeleton w="10rem" h="2rem" />
          <SkeletonText w="full" noOfLines={2} spacing={3} pr={8} />
        </VStack>
      </Flex>
    );

  const overview = [animal.species, animal.gender, animal.age];
  const topTags = animal.tags.slice(0, 3);

  return (
    <>
      <LinkBox
        _hover={{
          bgColor: "purple.50",
          shadow: "lg",
          transform: "translateY(-0.1rem)",
          transition: "transform 0.2s ease-in",
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        {...cardProps}
      >
        <NextImage
          src={animal.primary_photo_cropped?.small ?? defaultPic(animal)}
          alt={animal.name}
          width="full"
          height="300px"
        />
        <VStack spacing={2} align="start" justify="center" p={5} pt={3}>
          <Heading as="h3" fontSize="1.8rem" color="purple.700">
            <NextLink href={`/animals/${animal.id}`} passHref>
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
              <Tag key={tag} colorScheme={isHovered ? "purple" : "gray"}>
                {tag}
              </Tag>
            ))}
          </Wrap>
        </VStack>
      </LinkBox>
    </>
  );
};
export default AnimalCard;
