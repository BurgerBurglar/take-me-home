import { useEffect, useState } from "react";
import useToastError from "./useToastError";

const useFetchFilter = (
  type: string | undefined,
  fetcher: (type: string) => Promise<string[]>
) => {
  const [values, setBreeds] = useState<string[]>([]);
  const toastError = useToastError();
  useEffect(() => {
    const fetch = async () => {
      if (type === undefined) return;
      try {
        const data = await fetcher(type);
        setBreeds(data);
      } catch (err) {
        toastError();
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return values;
};
export default useFetchFilter;
