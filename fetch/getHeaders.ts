import getToken from "./getToken";

const getHeaders = async () => {
  const token = await getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
};
export default getHeaders;
