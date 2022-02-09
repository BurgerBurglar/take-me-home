import React from "react";

interface MapProps {
  address: string;
}

const GoogleMap: React.FC<MapProps> = ({ address }) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY ?? "";
  return (
    <iframe
      width="100%"
      height={200}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${address}`}
    ></iframe>
  );
};
export default GoogleMap;
