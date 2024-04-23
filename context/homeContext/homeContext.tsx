import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../generalTypes";

const AppContext = createContext<any>(undefined);

export const HomeProvider = ({ children }: ChildrenProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("HomeProvider should be within the useHomeContext");
  }
  return context;
};
