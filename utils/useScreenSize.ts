import { useBreakpointValue } from "@chakra-ui/react";

const useScreenSize = (breakPoint: string) =>
  useBreakpointValue({ base: false, [breakPoint]: true }) ?? false;
export default useScreenSize;
