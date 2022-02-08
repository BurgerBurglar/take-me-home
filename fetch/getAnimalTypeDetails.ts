import axios from "axios";
import { AnimalType } from "../types/animals";
import getHeaders from "./getHeaders";

const getAnimalTypeDetails = async (type: string) => {
  const headers = await getHeaders();
  const response = await axios.get<{ type: AnimalType }>(
    `https://api.petfinder.com/v2/types/${type}`,
    {
      headers,
    }
  );
  return response.data.type;
};
export default getAnimalTypeDetails;

export const getColors = async (type: string) => {
  const animalType = await getAnimalTypeDetails(type);
  return animalType.colors;
};

export const getCoats = async (type: string) => {
  const animalType = await getAnimalTypeDetails(type);
  return animalType.coats;
};
