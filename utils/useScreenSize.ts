import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const useScreenSize = (breakPoint: string) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const isReallyLargeScreen =
    useBreakpointValue({ base: false, [breakPoint]: true }) ?? false;
  useEffect(() => {
    setIsLargeScreen(isReallyLargeScreen);
  }, [isReallyLargeScreen]);
  return isLargeScreen;
};
export default useScreenSize;
