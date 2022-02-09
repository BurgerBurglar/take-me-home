import { useBreakpointValue } from "@chakra-ui/react";

const useLargeScreen = () => useBreakpointValue({ base: false, lg: true });
export default useLargeScreen;
