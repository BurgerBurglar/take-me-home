import { Animal } from "../types/animals";

const defaultPic = ({ type }: Animal) => `/${type.toLowerCase()}.jpg`;
export default defaultPic;
