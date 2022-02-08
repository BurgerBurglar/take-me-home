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
import { AnimalParams } from "../types/animals";

interface FilterHeadingProps extends HeadingProps {}

const FilterHeading: React.FC<FilterHeadingProps> = ({ children }) => (
  <Heading as="h2" fontSize="1.5rem">
    {children}
  </Heading>
);

interface FilterProps {
  params: AnimalParams;
  filter: (value: string, field: string) => void;
}

const Filter: React.FC<FilterProps> = ({ params, filter: handleChange }) => {
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
              <Radio value="Cat">Cat</Radio>
              <Radio value="Dog">Dog</Radio>
            </Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <FilterHeading>Breed</FilterHeading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}></AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Filter;
