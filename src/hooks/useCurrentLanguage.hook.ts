import {useState} from "react";

// data
import {availableLanguages} from "../data/available-languages.data";

// functions
import getStoredLanguage from "../functions/getStoredLanguage";

const useCurrentLanguage = () => {
   const [selectedLanguage, setSelectedLanguage] = useState<string>(getStoredLanguage());

   const setLanguage = (newLang: string): boolean => {
      if (availableLanguages.includes(newLang)) {
         localStorage.setItem("language", newLang);
         setSelectedLanguage(newLang);

         return true;
      }

      return false;
   };

   return {selectedLanguage, setLanguage};
};

export default useCurrentLanguage;