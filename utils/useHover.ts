import { MouseEvent, useState } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    if (e.type === "mouseenter") setIsHovered(true);
    if (e.type === "mouseleave") setIsHovered(false);
  };

  return { isHovered, handleHover };
};
export default useHover;
