import axios from "axios";
import { IS_SERVER_SIDE } from "../utils/constants";

const getToken = async () => {
  if (IS_SERVER_SIDE) {
    const response = await axios.post<{ access_token: string }>(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }
    );
    return response.data.access_token;
  }
  const response = await axios.get<string>("/api/token");
  return response.data;
};
export default getToken;
