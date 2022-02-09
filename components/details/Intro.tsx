import {
  Heading,
  HStack,
  Icon,
  ListItem,
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
      {colors.length === 0 ? null : (
        <>
          <Heading as="h4" fontSize="1.2rem">
            I look like...
          </Heading>
          <Text>{colors}</Text>
        </>
      )}
      {animal.coat === null ? null : (
        <>
          <Heading as="h4" fontSize="1.2rem">
            My coat is...
          </Heading>
          <Text>{animal.coat.toLowerCase()}</Text>
        </>
      )}
      <Heading as="h4" fontSize="1.2rem">
        I&apos;m good with...
      </Heading>
      <UnorderedList style={{ marginLeft: "1.5rem" }}>
        {goodWiths.map((goodWith) => (
          <ListItem key={goodWith}>{goodWith}</ListItem>
        ))}
      </UnorderedList>
      <Heading as="h4" fontSize="1.2rem">
        I&apos;ve got...
      </Heading>
      <UnorderedList style={{ marginLeft: "1.5rem" }}>
        {attributes.map((attribute) => (
          <ListItem key={attribute}>{attribute}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};
export default Intro;
