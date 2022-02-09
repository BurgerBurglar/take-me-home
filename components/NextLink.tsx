import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

interface NextLinkProps {
  href: string | UrlObject;
  chakraProps?: ChakraLinkProps;
}

const NextLink: React.FC<NextLinkProps> = ({ href, children, chakraProps }) => {
  return (
    <Link href={href} passHref>
      <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </Link>
  );
};
export default NextLink;
