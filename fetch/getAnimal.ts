import axios from "axios";
import { Animal } from "../types/animals";
import getHeaders from "./getHeaders";

const getAnimal = async (id: number) => {
  const headers = await getHeaders();
  const response = await axios.get<{ animal: Animal }>(
    `https://api.petfinder.com/v2/animals/${id}`,
    {
      headers,
    }
  );
  return response.data.animal;
};
export default getAnimal;
