import type { NextApiRequest, NextApiResponse } from "next";
import getToken from "../../fetch/getToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const token: string = await getToken();
  res.status(200).send(token);
}
