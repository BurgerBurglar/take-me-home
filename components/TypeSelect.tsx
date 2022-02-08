import { Spinner } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import ReactSelect, { ActionMeta } from "react-select";
import getBreeds from "../fetch/getBreeds";
import { AnimalParams, MultiChoiceAnimalParam } from "../types/animals";
import getSelectOptions, { Option } from "../utils/getSelectOptions";
import useFetch from "../utils/useFetch";

interface SelectProps {
  name: MultiChoiceAnimalParam;
  type: string;
  setFilter: (field: MultiChoiceAnimalParam, values: string[]) => void;
}

const TypeSelect: React.FC<SelectProps> = ({ name, type, setFilter }) => {
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
    setFilter(name, inputValues);
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
