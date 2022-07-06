import React, {createContext, ReactNode} from "react";

// hooks
import useCurrentSection from "../hooks/useCurrentSection";

// interfaces
import {IAvailableSectionsId} from "../data/available-sections/available-sections.types";

export interface ICurrentSectionContext {
   currentSection: IAvailableSectionsId;
}

const innerCurrentSectionContext: ICurrentSectionContext = {
   currentSection: "none"
};

// provider interface
interface ICurrentSectionProvider {
   children: ReactNode;
}

export const CurrentSectionContext = createContext(innerCurrentSectionContext);

const CurrentSectionProvider: React.FC<ICurrentSectionProvider> = ({children}) => {
   const {currentSection} = useCurrentSection();

   return (
      <CurrentSectionContext.Provider
         value={{
            currentSection: currentSection
         }}
      >
         {children}
      </CurrentSectionContext.Provider>
   );
};

export default CurrentSectionProvider;