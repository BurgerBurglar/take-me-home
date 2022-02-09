import {
  Heading,
  HStack,
  Icon,
  ListItem,
  SimpleGrid,
  Stack,
  StackProps,
  Tag,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { MdFemale, MdMale } from "react-icons/md";
import { Animal } from "../../types/animals";
import joinValues from "../../utils/joinValues";
import Blockquote from "../Blockquote";

interface IntroProps extends StackProps {
  animal: Animal;
}

const Intro: React.FC<IntroProps> = ({ animal, ...props }) => {
  const colors = joinValues(animal.colors);
  const GenderIcon = () => (
    <Icon
      as={animal.gender === "Male" ? MdMale : MdFemale}
      color={animal.gender === "Male" ? "blue.500" : "pink.500"}
    />
  );
  const goodWiths = Object.entries(animal.environment)
    .filter(([_, isGood]) => isGood)
    .map(([key]) => key);

  const attributes = Object.entries(animal.attributes)
    .filter(([_, isTrue]) => isTrue)
    .map(([attribute]) => attribute.split("_").join(" "));

  const H4: React.FC = ({ children }) => (
    <Heading
      as="h4"
      fontSize="1.5rem"
      color="gray.600"
      fontFamily="Fuzzy Bubbles"
    >
      {children}
    </Heading>
  );

  return (
    <VStack
      align="start"
      spacing={5}
      border="1px"
      borderColor="gray.200"
      rounded="lg"
      shadow="md"
      color="gray.600"
      p={5}
      {...props}
    >
      <HStack fontSize="2rem">
        <Heading color="purple.700">{animal.name}</Heading>
        <GenderIcon />
      </HStack>
      <Text>{animal.breeds.primary}</Text>
      <Wrap>
        {animal.tags.map((tag) => (
          <Tag key={tag} colorScheme="purple">
            {tag}
          </Tag>
        ))}
      </Wrap>
      <Blockquote>{animal.description}</Blockquote>
      <Heading as="h3" fontSize="1.5rem" color="purple.700">
        Let&apos;s get to know each other!
      </Heading>
      <SimpleGrid
        minChildWidth="15rem"
        spacingX="5rem"
        spacingY="2rem"
        w="full"
        fontFamily="Fuzzy Bubbles"
      >
        <Stack>
          {colors.length === 0 ? null : (
            <>
              <H4>I look like...</H4>
              <Text>{colors}</Text>
            </>
          )}
        </Stack>

        <Stack>
          {animal.coat === null ? null : (
            <>
              <H4>My coat is...</H4>

              <Text>{animal.coat.toLowerCase()}</Text>
            </>
          )}
        </Stack>

        <Stack>
          <H4>I&apos;m good with...</H4>
          <UnorderedList style={{ marginLeft: "1.5rem" }}>
            {goodWiths.map((goodWith) => (
              <ListItem key={goodWith}>{goodWith}</ListItem>
            ))}
          </UnorderedList>
        </Stack>

        <Stack>
          <H4>I&apos;ve got...</H4>
          <UnorderedList style={{ marginLeft: "1.5rem" }}>
            {attributes.map((attribute) => (
              <ListItem key={attribute}>{attribute}</ListItem>
            ))}
          </UnorderedList>
        </Stack>
      </SimpleGrid>
    </VStack>
  );
};
export default Intro;
