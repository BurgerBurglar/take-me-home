import { useBreakpointValue } from "@chakra-ui/react";

const useScreenSize = (breakPoint: string) =>
  useBreakpointValue({ base: false, [breakPoint]: true });
export default useScreenSize;
