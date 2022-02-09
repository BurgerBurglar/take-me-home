import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AnimalParams } from "../types/animals";

export interface ParamsContextProps {
  params: AnimalParams;
  setParams: Dispatch<SetStateAction<AnimalParams>>;
}

const ParamsContext = createContext<ParamsContextProps>({
  params: {},
  setParams: () => null,
});

const ParamsProvider: React.FC = ({ children }) => {
  const [params, setParams] = useState<AnimalParams>({});
  return (
    <ParamsContext.Provider value={{ params, setParams }}>
      {children}
    </ParamsContext.Provider>
  );
};
export default ParamsProvider;

export const useParams = () => useContext(ParamsContext);
