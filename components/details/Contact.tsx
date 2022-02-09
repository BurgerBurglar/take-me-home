import {
  Heading,
  HStack,
  Icon,
  StackProps,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import React from "react";
import { FaPaw } from "react-icons/fa";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { Contact } from "../../types/animals";
import { Organization, SocialMedia } from "../../types/Organization";
import Blockquote from "../Blockquote";
import Link from "../NextLink";
import GoogleMap from "./GoogleMap";
import SocialIcon from "./SocialIcon";

interface ContactProps extends StackProps {
  organization: Organization;
}

const Contact: React.FC<ContactProps> = ({ organization, ...props }) => {
  const address = Object.values(organization.address)
    .filter((field) => field)
    .join(", ");

  const socialMedia = Object.entries(organization.social_media).map(
    ([platform, url]) => ({
      platform: platform as keyof SocialMedia,
      url: url as string | null,
    })
  );

  return (
    <VStack
      bgColor="purple.600"
      color="gray.200"
      rounded="xl"
      textAlign="center"
      p={5}
      {...props}
    >
      <HStack fontSize="1.5rem" color="white">
        <FaPaw />
        <Heading as="h3">Take me home!</Heading>
        <FaPaw />
      </HStack>
      <HStack textAlign="center">
        <Heading as="h4" fontSize="1.3rem">
          {organization.website === null ? (
            organization.name
          ) : (
            <Link href={organization.website}>{organization.name}</Link>
          )}
        </Heading>
      </HStack>
      {!organization.email ? null : (
        <HStack fontSize="1.2rem">
          <Icon as={MdMail} />
          <Link href={`mailto:${organization.email}`}>
            {organization.email}
          </Link>
        </HStack>
      )}
      {!organization.phone ? null : (
        <HStack fontSize="1.2rem">
          <Icon as={MdPhone} />
          <Link href={`tel:${organization.phone}`}>{organization.phone}</Link>
        </HStack>
      )}
      {!address.length ? null : (
        <>
          <HStack fontSize="1rem" textAlign="end">
            <Icon as={MdLocationOn} />
            <Text>{address}</Text>
          </HStack>
          <GoogleMap address={address} />
        </>
      )}
      {organization.mission_statement === null ? null : (
        <Blockquote bgColor="purple.500">
          {organization.mission_statement}
        </Blockquote>
      )}
      <Wrap spacing={5}>
        {socialMedia.map((social) => (
          <SocialIcon key={social.platform} {...social} />
        ))}
      </Wrap>
    </VStack>
  );
};
export default Contact;
