import React, { createContext, ReactNode } from "react";

// hooks
import useLayoutColor from "./useLayoutColor.hook";

interface ILayoutColorProvider {
  children: ReactNode;
}

export interface ILayoutColorContext {
  layoutColor: string;
  setProperLayoutColor: (v: string) => void;
}

const innerLayoutColorContext: ILayoutColorContext = {
  layoutColor: "dark",
  setProperLayoutColor: () => undefined
};

export const LayoutColorContext = createContext(innerLayoutColorContext);

const LayoutColorProvider: React.FC<ILayoutColorProvider> = ({children}) => {
  const {layoutColor, setProperLayoutColor} = useLayoutColor();

  return (
    <LayoutColorContext.Provider
      value={{
        layoutColor: layoutColor,
		setProperLayoutColor: setProperLayoutColor
      }}
    >
      {children}
    </LayoutColorContext.Provider>
  );
};

export default LayoutColorProvider;