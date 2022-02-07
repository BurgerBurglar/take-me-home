import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface NextImageProps {
  src: string;
  alt: string;
  w: string;
  h: string;
}

const NextImage: React.FC<NextImageProps> = ({ src, alt, w, h }) => {
  return (
    <Flex>
      <Box position="relative" w={w} h={h}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </Box>
    </Flex>
  );
};
export default NextImage;
