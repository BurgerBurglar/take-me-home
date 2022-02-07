import axios from "axios";
import { AnimalList } from "../types/animals";
import getAnimalsWithPhoto from "../utils/getAnimalsWithPhoto";
import getHeaders from "./getHeaders";

const getAnimals = async (params: any = undefined) => {
  const headers = await getHeaders();
  const response = await axios.get<AnimalList>(
    "https://api.petfinder.com/v2/animals",
    {
      headers,
      params,
    }
  );
  const { animals, pagination } = response.data;
  const animalsWithPhoto = getAnimalsWithPhoto(animals);
  return {
    animals: animalsWithPhoto,
    pagination,
  };
};
export default getAnimals;
