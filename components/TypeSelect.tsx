import React from "react";
import ReactSelect from "react-select";
import { MultiChoiceAnimalParam } from "../types/animals";
import getSelectObjs, { Option } from "../utils/getSelectOptions";

interface SelectProps {
  name: MultiChoiceAnimalParam;
  options: string[];
  values: string[];
  filterMany: (field: MultiChoiceAnimalParam, values: string[]) => void;
}

const TypeSelect: React.FC<SelectProps> = ({
  name,
  options,
  values,
  filterMany,
}) => {
  if (options.length === 0) return null;

  const optionObjs = getSelectObjs(options);
  const valueObjs = getSelectObjs(values);

  const handleChange = (inputOptions: readonly Option[]) => {
    const inputValues = inputOptions.map(({ value }) => value);
    filterMany(name, inputValues);
  };

  return (
    <ReactSelect
      isMulti
      name={name}
      options={optionObjs}
      value={valueObjs}
      onChange={handleChange}
    />
  );
};
export default TypeSelect;
