import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import getBreeds from "../fetch/getBreeds";
import { MultiChoiceAnimalParam } from "../types/animals";
import getSelectOptions, { Option } from "../utils/getSelectOptions";

interface SelectProps {
  name: MultiChoiceAnimalParam;
  type: string;
  filterMany: (field: MultiChoiceAnimalParam, values: string[]) => void;
}

const TypeSelect: React.FC<SelectProps> = ({ name, type, filterMany }) => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const toast = useToast();
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getBreeds(type);
        setBreeds(data);
      } catch (err) {
        toast({
          title: "that didnt work",
          description: "Try again?",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

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
