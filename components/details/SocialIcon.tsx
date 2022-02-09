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
import Link from "../NextLink";

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
    <Link href={url} chakraProps={{ fontSize: "1.5rem" }}>
      <Icon />
    </Link>
  );
};
export default SocialIcon;
