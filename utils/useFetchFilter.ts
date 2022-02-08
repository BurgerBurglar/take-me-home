import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const useFetchFilter = (
  type: string | undefined,
  fetcher: (type: string) => Promise<string[]>
) => {
  const [values, setBreeds] = useState<string[]>([]);
  const toast = useToast();
  useEffect(() => {
    const fetch = async () => {
      if (type === undefined) return;
      try {
        const data = await fetcher(type);
        setBreeds(data);
      } catch (err) {
        toast({
          title: "that didnt work",
          description: "Try again?",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return values;
};
export default useFetchFilter;
