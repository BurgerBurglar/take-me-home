import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimalParams } from "../types/animals";
import isClientSide from "../utils/isClientSide";

export interface ParamsContextProps {
  params: AnimalParams;
  setParams: Dispatch<SetStateAction<AnimalParams>>;
}

const ParamsContext = createContext<ParamsContextProps>({
  params: {},
  setParams: () => null,
});

const ParamsProvider: React.FC = ({ children }) => {
  const location = isClientSide()
    ? localStorage.getItem("zipcode") ?? undefined
    : undefined;
  const [params, setParams] = useState<AnimalParams>({ location });
  useEffect(() => {
    if (params.location !== undefined) {
      localStorage.setItem("zipcode", params.location);
    }
  }, [params.location]);
  return (
    <ParamsContext.Provider value={{ params, setParams }}>
      {children}
    </ParamsContext.Provider>
  );
};
export default ParamsProvider;

export const useParams = () => useContext(ParamsContext);
