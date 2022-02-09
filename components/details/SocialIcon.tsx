import { IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SocialMedia } from "../../types/Organization";

interface SocialIconProps {
  platform: keyof SocialMedia;
  url: string | null;
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform, url }) => {
  if (url === null) return null;
  const iconMap: Record<keyof SocialMedia, IconType> = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    youtube: FaYoutube,
    instagram: FaInstagram,
    pinterest: FaPinterest,
  };
  const Icon = iconMap[platform];
  return (
    <NextLink href={url} passHref>
      <Link fontSize="1.5rem">
        <Icon />
      </Link>
    </NextLink>
  );
};
export default SocialIcon;
