import { Box, BoxProps } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import React from "react";

interface NextImageProps extends ImageProps {
  src: string;
  alt: string;
  chakraProps?: BoxProps;
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  width,
  height,
  chakraProps,
  ...props
}) => {
  return (
    <Box position="relative" w={width} h={height} {...chakraProps}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" {...props} />
    </Box>
  );
};
export default NextImage;
