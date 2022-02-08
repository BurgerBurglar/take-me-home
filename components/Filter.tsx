import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HeadingProps,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { AnimalParams, MultiChoiceAnimalParam } from "../types/animals";
import { ANIMAL_TYPES } from "../utils/constants";
import TypeSelect from "./TypeSelect";

interface FilterHeadingProps extends HeadingProps {}

const FilterHeading: React.FC<FilterHeadingProps> = ({ children }) => (
  <Heading as="h2" fontSize="1.5rem">
    {children}
  </Heading>
);

interface FilterProps {
  params: AnimalParams;
  setParams: Dispatch<SetStateAction<AnimalParams>>;
  filter: (value: string, field: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  params,
  filter: handleChange,
  setParams,
}) => {
  const setFilter = (field: MultiChoiceAnimalParam, values: string[]) => {
    setParams((prev) => ({
      ...prev,
      [field]: values.join(","),
    }));
  };
  return (
    <Accordion allowMultiple defaultIndex={[0, 1]} w="300px" flex="300px 0 0">
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <FilterHeading>Type</FilterHeading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <RadioGroup
            value={params.type}
            onChange={(value) => handleChange(value, "type")}
          >
            <Stack>
              {ANIMAL_TYPES.map((type) => (
                <Radio key={type} value={type}>
                  {type}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
      {params.type === undefined ? null : (
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <FilterHeading>Breed</FilterHeading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <TypeSelect name="breed" type={params.type} setFilter={setFilter} />
          </AccordionPanel>
        </AccordionItem>
      )}
    </Accordion>
  );
};
export default Filter;
