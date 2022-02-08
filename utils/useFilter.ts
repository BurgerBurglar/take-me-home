import { Dispatch, SetStateAction, useEffect } from "react";
import getAnimalList from "../fetch/getAnimals";

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

  const filter = (value: string, field: string) => {
    setParams((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return filter;
};
export default useFilter;
