import axios from "axios";
import { Organization } from "../types/Organization";
import getHeaders from "./getHeaders";

const getOrganization = async (id: string) => {
  const headers = await getHeaders();
  const response = await axios.get<{ organization: Organization }>(
    `https://api.petfinder.com/v2/organizations/${id}`,
    {
      headers,
    }
  );
  return response.data.organization;
};
export default getOrganization;
