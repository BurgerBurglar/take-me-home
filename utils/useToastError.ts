import { useToast } from "@chakra-ui/react";

const useToastError = () => {
  const toast = useToast();
  return () =>
    toast({
      title: "that didnt work",
      description: "Try again?",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
};
export default useToastError;
