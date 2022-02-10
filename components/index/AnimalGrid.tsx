import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Animal } from "../../types/animals";
import AnimalCard from "./AnimalCard";

interface AnimalListProps {
  animals: Animal[];
}

const AnimalGrid: React.FC<AnimalListProps> = ({ animals }) => {
  let cards: JSX.Element[] = [];

  if (animals.length === 0) {
    const range9 = Array.from({ length: 9 }, (_, i) => i);
    cards = range9.map((i) => <AnimalCard key={i} />);
  } else {
    cards = animals.map((animal) => (
      <AnimalCard key={animal.id} animal={animal} />
    ));
  }

  return (
    <SimpleGrid minChildWidth="min(300px, 100%)" spacing={3} w="full">
      {cards}
    </SimpleGrid>
  );
};
export default AnimalGrid;
