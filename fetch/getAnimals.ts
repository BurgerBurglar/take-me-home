import axios from "axios";
import { AnimalList, AnimalParams } from "../types/animals";
import getHeaders from "./getHeaders";

const getAnimalList = async (params: AnimalParams = {}) => {
  const headers = await getHeaders();
  const response = await axios.get<AnimalList>(
    "https://api.petfinder.com/v2/animals",
    {
      headers,
      params: { ...params, limit: 100 },
    }
  );
  const { animals, pagination } = response.data;
  return {
    animals,
    pagination,
  };
};
export default getAnimalList;

export const getAnimals = async (params: AnimalParams) => {
  const { animals } = await getAnimalList(params);
  return animals;
};