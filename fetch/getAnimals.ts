import axios from "axios";
import { AnimalList } from "../types/animals";
import getHeaders from "./getHeaders";

const getAnimals = async () => {
  const headers = await getHeaders();
  const response = await axios.get<AnimalList>(
    "https://api.petfinder.com/v2/animals",
    {
      headers,
    }
  );
  return response.data;
};
export default getAnimals;
