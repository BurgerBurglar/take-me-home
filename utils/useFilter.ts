import { Dispatch, SetStateAction, useEffect } from "react";
import {
  Animal,
  AnimalParams,
  MultiChoiceAnimalParam,
  SingleChoiceAnimalParam,
} from "../types/animals";
import nullifyEmpty from "./nullifyEmpty";
import useToastError from "./useToastError";

interface Props {
  params: AnimalParams;
  setParams: Dispatch<SetStateAction<AnimalParams>>;
  fetcher: (AnimalParams: AnimalParams) => Promise<Animal[]>;
  setter: Dispatch<SetStateAction<Animal[]>>;
}
const useFilter = ({ params, setParams, fetcher, setter }: Props) => {
  const toastError = useToastError();
  useEffect(() => {
    (async () => {
      try {
        const animals = await fetcher(params);
        setter(animals);
      } catch (err) {
        toastError();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const filterOne = (field: SingleChoiceAnimalParam, value: string) => {
    const realValue = nullifyEmpty(value);
    if (field === "type") {
      setParams({
        type: realValue,
      });
    }
    setParams((prev) => ({
      ...prev,
      [field]: realValue,
    }));
  };

  const filterMany = (field: MultiChoiceAnimalParam, values: string[]) => {
    const realValues = nullifyEmpty(values);
    setParams((prev) => ({
      ...prev,
      [field]: realValues?.join(","),
    }));
  };

  return { filterOne, filterMany };
};
export default useFilter;
