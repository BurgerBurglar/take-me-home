import { Box, Flex } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import React from "react";

interface NextImageProps extends ImageProps {
  src: string;
  alt: string;
  w: string;
  h: string;
}

const NextImage: React.FC<NextImageProps> = ({ src, alt, w, h, ...props }) => {
  return (
    <Flex>
      <Box position="relative" w={w} h={h}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" {...props} />
      </Box>
    </Flex>
  );
};
export default NextImage;
