import { Stack } from "@chakra-ui/react";
import React from "react";
import { Animal } from "../types/animals";
import AnimalCard from "./AnimalCard";

interface AnimalListProps {
  animals: Animal[];
}

const AnimalList: React.FC<AnimalListProps> = ({ animals }) => {
  return (
    <>
      <Stack spacing={3}>
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </Stack>
    </>
  );
};
export default AnimalList;
