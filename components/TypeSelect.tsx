import React from "react";
import ReactSelect from "react-select";
import { MultiChoiceAnimalParam } from "../types/animals";
import getSelectOptions, { Option } from "../utils/getSelectOptions";

interface SelectProps {
  name: MultiChoiceAnimalParam;
  values: string[];
  filterMany: (field: MultiChoiceAnimalParam, values: string[]) => void;
}

const TypeSelect: React.FC<SelectProps> = ({ name, values, filterMany }) => {
  if (values.length === 0) return null;

  const options = getSelectOptions(values);

  const handleChange = (inputOptions: readonly Option[]) => {
    const inputValues = inputOptions.map(({ value }) => value);
    filterMany(name, inputValues);
  };

  return (
    <ReactSelect
      isMulti
      name={name}
      options={options}
      onChange={handleChange}
    />
  );
};
export default TypeSelect;
