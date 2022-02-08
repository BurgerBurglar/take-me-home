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
import React from "react";
import {
  AnimalParams,
  MultiChoiceAnimalParam,
  SingleChoiceAnimalParam,
} from "../types/animals";
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
  filterOne: (value: SingleChoiceAnimalParam, field: string) => void;
  filterMany: (field: MultiChoiceAnimalParam, values: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ params, filterOne, filterMany }) => {
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
            onChange={(value) => filterOne("type", value)}
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
            <TypeSelect
              name="breed"
              type={params.type}
              filterMany={filterMany}
            />
          </AccordionPanel>
        </AccordionItem>
      )}
    </Accordion>
  );
};
export default Filter;
