import {
  VStack,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  StackProps,
} from "@chakra-ui/react";
import React from "react";
import { FaPaw } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import { Contact } from "../../types/animals";

import NextLink from "next/link";
interface ContactProps extends StackProps {
  contact: Contact;
}

const Contact: React.FC<ContactProps> = ({ contact, ...props }) => {
  const address = Object.values(contact.address)
    .filter((field) => field)
    .join(", ");
  return (
    <VStack bgColor="purple.600" color="white" rounded="xl" p={5} {...props}>
      <HStack fontSize="1.5rem" spacing={3}>
        <FaPaw />
        <Heading as="h3">Take me home!</Heading>
        <FaPaw />
      </HStack>
      {!contact.email ? null : (
        <HStack fontSize="1.2rem">
          <Icon as={MdMail} />
          <NextLink href={`mailto:${contact.email}`} passHref>
            <Link>{contact.email}</Link>
          </NextLink>
        </HStack>
      )}
      {!contact.phone ? null : (
        <HStack fontSize="1.2rem">
          <Icon as={MdPhone} />
          <NextLink href={`tel:${contact.phone}`} passHref>
            <Link>{contact.phone}</Link>
          </NextLink>
        </HStack>
      )}
      {!contact.address ? null : (
        <HStack fontSize="1.2rem">
          <Icon as={MdLocationOn} />
          <Text>{address}</Text>
        </HStack>
      )}
    </VStack>
  );
};
export default Contact;
