import {
  Heading,
  HStack,
  Icon,
  Link,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { FaPaw } from "react-icons/fa";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { Contact } from "../../types/animals";
import { Organization } from "../../types/Organization";
import BlockQuote from "../BlockQuote";

interface ContactProps extends StackProps {
  organization: Organization;
}

const Contact: React.FC<ContactProps> = ({ organization, ...props }) => {
  const address = Object.values(organization.address)
    .filter((field) => field)
    .join(", ");
  return (
    <VStack bgColor="purple.600" color="gray.200" rounded="xl" p={5} {...props}>
      <HStack fontSize="1.5rem" spacing={3} color="white">
        <FaPaw />
        <Heading as="h3">Take me home!</Heading>
        <FaPaw />
      </HStack>
      <HStack textAlign="center">
        <Heading as="h4" fontSize="1.3rem">
          {organization.website === null ? (
            organization.name
          ) : (
            <NextLink href={organization.website} passHref>
              <Link>{organization.name}</Link>
            </NextLink>
          )}
        </Heading>
      </HStack>
      {!organization.email ? null : (
        <HStack fontSize="1.2rem">
          <Icon as={MdMail} />
          <NextLink href={`mailto:${organization.email}`} passHref>
            <Link>{organization.email}</Link>
          </NextLink>
        </HStack>
      )}
      {!organization.phone ? null : (
        <HStack fontSize="1.2rem">
          <Icon as={MdPhone} />
          <NextLink href={`tel:${organization.phone}`} passHref>
            <Link>{organization.phone}</Link>
          </NextLink>
        </HStack>
      )}
      {!address.length ? null : (
        <HStack fontSize="1rem" textAlign="end">
          <Icon as={MdLocationOn} />
          <Text>{address}</Text>
        </HStack>
      )}
      {organization.mission_statement === null ? null : (
        <BlockQuote bgColor="purple.500">
          {organization.mission_statement}
        </BlockQuote>
      )}
    </VStack>
  );
};
export default Contact;
