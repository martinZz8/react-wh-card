import React, {createContext, ReactNode} from "react";

// hooks
import useCurrentLanguage from "../hooks/useCurrentLanguage.hook";

export interface ICurrentLanguageContext {
   selectedLanguage: string;
   setLanguage: (val: string) => boolean;
}

const innerCurrentLanguageContext: ICurrentLanguageContext = {
   selectedLanguage: "PL",
   setLanguage: (val) => false
};

// provider interface
interface ICurrentLanguageProvider {
   children: ReactNode;
}

export const CurrentLanguageContext = createContext(innerCurrentLanguageContext);

const CurrentLanguageProvider: React.FC<ICurrentLanguageProvider> = ({children}) => {
   const {selectedLanguage, setLanguage} = useCurrentLanguage();

   return (
      <CurrentLanguageContext.Provider
         value={{
            selectedLanguage: selectedLanguage,
            setLanguage: setLanguage
         }}
      >
         {children}
      </CurrentLanguageContext.Provider>
   );
};

export default CurrentLanguageProvider;