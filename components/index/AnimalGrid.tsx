import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Animal } from "../../types/animals";
import AnimalCard from "./AnimalCard";

interface AnimalListProps {
  animals: Animal[];
}

const AnimalGrid: React.FC<AnimalListProps> = ({ animals }) => {
  return (
    <SimpleGrid minChildWidth="min(300px, 100%)" spacing={3} w="full">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </SimpleGrid>
  );
};
export default AnimalGrid;
