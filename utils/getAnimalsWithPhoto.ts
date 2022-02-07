import { Animal } from "../types/animals";

const getAnimalsWithPhoto = (animals: Animal[]) =>
  animals.filter(({ primary_photo_cropped }) => primary_photo_cropped !== null);
export default getAnimalsWithPhoto;
