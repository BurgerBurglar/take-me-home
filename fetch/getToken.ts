import axios from "axios";

const getToken = async () => {
  const response = await axios.post(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      grant_type: "client_credentials",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    }
  );
  const { access_token } = response.data;
  return access_token;
};
export default getToken;
