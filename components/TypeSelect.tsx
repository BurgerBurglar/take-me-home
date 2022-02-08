import { Spinner } from "@chakra-ui/react";
import React from "react";
import ReactSelect from "react-select";
import getBreeds from "../fetch/getBreeds";
import { MultiChoiceAnimalParam } from "../types/animals";
import getSelectOptions, { Option } from "../utils/getSelectOptions";
import useFetch from "../utils/useFetch";

interface SelectProps {
  name: MultiChoiceAnimalParam;
  type: string;
  filterMany: (field: MultiChoiceAnimalParam, values: string[]) => void;
}

const TypeSelect: React.FC<SelectProps> = ({ name, type, filterMany }) => {
  const [breeds, { loading }] = useFetch<string[]>(
    () => getBreeds(type),
    [],
    [type]
  );

  if (loading) return <Spinner color="blue.500" />;
  if (breeds.length === 0) return null;

  const breedsOptions = getSelectOptions(breeds);

  const handleChange = (inputOptions: readonly Option[]) => {
    const inputValues = inputOptions.map(({ value }) => value);
    filterMany(name, inputValues);
  };

  return (
    <ReactSelect
      isMulti
      name={name}
      options={breedsOptions}
      onChange={handleChange}
    />
  );
};
export default TypeSelect;
