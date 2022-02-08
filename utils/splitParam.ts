import { AnimalParams, MultiChoiceAnimalParam } from "../types/animals";

const splitParam = (params: AnimalParams, field: MultiChoiceAnimalParam) =>
  params[field]?.split(",") ?? [];

export default splitParam;
