import { Icon, Text, TextProps } from "@chakra-ui/react";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface BlockQuoteProps extends TextProps {}

const BlockQuote: React.FC<BlockQuoteProps> = ({
  children,
  bgColor = "gray.50",
}) => {
  return (
    <Text as="blockquote" bgColor={bgColor} textAlign="start" p={5}>
      <Icon as={FaQuoteLeft} color="purple.400" mr={2} />
      {children}
    </Text>
  );
};
export default BlockQuote;
