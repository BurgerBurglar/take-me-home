import axios from "axios";
import { Breed } from "../types/breeds";
import getHeaders from "./getHeaders";

const getBreeds = async (type: string) => {
  const headers = await getHeaders();
  const response = await axios.get<{ breeds: Breed[] }>(
    `https://api.petfinder.com/v2/types/${type}/breeds`,
    {
      headers,
    }
  );
  const { breeds } = response.data;
  return breeds.map(({ name }) => name);
};
export default getBreeds;
