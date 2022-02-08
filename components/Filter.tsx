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
import { getColors } from "../fetch/getAnimalTypeDetails";
import getBreeds from "../fetch/getBreeds";
import {
  AnimalParams,
  MultiChoiceAnimalParam,
  SingleChoiceAnimalParam,
} from "../types/animals";
import { ANIMAL_TYPES } from "../utils/constants";
import splitParam from "../utils/splitParam";
import useFetchFilter from "../utils/useFetchFilter";
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
  const breedOptions = useFetchFilter(params.type, getBreeds);
  const breedValues = splitParam(params, "breed");

  const genderOptions = ["male", "female"];
  const genderValues = splitParam(params, "gender");

  const colorOptions = useFetchFilter(params.type, getColors);
  const colorValues = splitParam(params, "color");

  const sizeOptions = ["small", "medium", "large", "xlarge"];
  const sizeValues = splitParam(params, "size");

  const coatsOptions = ["short", "medium", "long", "wire", "hairless", "curly"];
  const coatsValues = splitParam(params, "coat");

  return (
    <Accordion
      allowMultiple
      defaultIndex={[0, 1, 2, 3, 4, 5, 6]}
      w="300px"
      flex="300px 0 0"
    >
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
        <>
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
                options={breedOptions}
                values={breedValues}
                filterMany={filterMany}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <FilterHeading>Gender</FilterHeading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <TypeSelect
                name="gender"
                options={genderOptions}
                values={genderValues}
                filterMany={filterMany}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <FilterHeading>Color</FilterHeading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <TypeSelect
                name="color"
                options={colorOptions}
                values={colorValues}
                filterMany={filterMany}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <FilterHeading>Size</FilterHeading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <TypeSelect
                name="size"
                options={sizeOptions}
                values={sizeValues}
                filterMany={filterMany}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <FilterHeading>Coat</FilterHeading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <TypeSelect
                name="coat"
                options={coatsOptions}
                values={coatsValues}
                filterMany={filterMany}
              />
            </AccordionPanel>
          </AccordionItem>
        </>
      )}
    </Accordion>
  );
};
export default Filter;
