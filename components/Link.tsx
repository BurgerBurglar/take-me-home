import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { UrlObject } from "url";

interface LinkProps {
  href: string | UrlObject;
  chakraProps?: ChakraLinkProps;
}

const Link: React.FC<LinkProps> = ({ href, children, chakraProps }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </NextLink>
  );
};
export default Link;
