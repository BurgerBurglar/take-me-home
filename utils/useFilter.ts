import { Dispatch, SetStateAction, useEffect } from "react";
import {
  Animal,
  AnimalParams,
  MultiChoiceAnimalParam,
  SingleChoiceAnimalParam,
} from "../types/animals";
import useToastError from "./useToastError";

interface Props {
  params: AnimalParams;
  setParams: Dispatch<SetStateAction<AnimalParams>>;
  fetcher: (AnimalParams: AnimalParams) => Promise<Animal[]>;
  setter: Dispatch<SetStateAction<Animal[]>>;
}
const useFilter = <AnimalParams, Animal>({
  params,
  setParams,
  fetcher,
  setter,
}: Props) => {
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
    if (field === "type") {
      setParams({
        type: value,
      });
    }
    setParams((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const filterMany = (field: MultiChoiceAnimalParam, values: string[]) => {
    setParams((prev) => ({
      ...prev,
      [field]: values.join(","),
    }));
  };

  return { filterOne, filterMany };
};
export default useFilter;
