import React, {createContext, ReactNode} from "react";

// hooks
import useWindowSize from "./useWindowSize.hook";

export interface IWindowContext {
   windowWidth: number;
   windowHeight: number;
}

const innerWindowContext: IWindowContext = {
   windowWidth: 0,
   windowHeight: 0
};

// provider interface
interface IWindowSizeProvider {
   children: ReactNode;
}

export const WindowContext = createContext(innerWindowContext);

const WindowSizeProvider: React.FC<IWindowSizeProvider> = ({children}) => {
   const {windowWidth, windowHeight} = useWindowSize();

   return (
      <WindowContext.Provider
         value={{
            windowWidth: windowWidth,
            windowHeight: windowHeight
         }}
      >
         {children}
      </WindowContext.Provider>
   );
};

export default WindowSizeProvider;