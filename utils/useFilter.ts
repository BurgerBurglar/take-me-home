import { Dispatch, SetStateAction, useEffect } from "react";
import {
  MultiChoiceAnimalParam,
  SingleChoiceAnimalParam,
} from "../types/animals";

interface Props<Params, Data> {
  params: Params;
  setParams: Dispatch<SetStateAction<Params>>;
  fetcher: (params: Params) => Promise<Data[]>;
  setter: Dispatch<SetStateAction<Data[]>>;
}
const useFilter = <Params, Data>({
  params,
  setParams,
  fetcher,
  setter,
}: Props<Params, Data>) => {
  useEffect(() => {
    (async () => {
      const data = await fetcher(params);
      setter(data);
    })();
  }, [fetcher, params, setter]);

  const filterOne = (field: SingleChoiceAnimalParam, value: string) => {
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
