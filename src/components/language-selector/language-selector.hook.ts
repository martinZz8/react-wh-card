import {useState, useEffect, useContext} from "react";

// data
import {availableLanguages} from "../../data/available-languages.data";

// context
import {CurrentLanguageContext} from "../../providers/current-language-provider.component";

const useLanguageSelector = () => {
   const [isSelectorOpened, setIsSelectorOpened] = useState<boolean>(false);
   const {selectedLanguage, setLanguage} = useContext(CurrentLanguageContext);

   const selectLanguage = (newLang: string) => {
      if (availableLanguages.includes(newLang)) {
         setLanguage(newLang);
         setIsSelectorOpened(false);
      }
   };

   const toggleIsSelectorOpened = () => {
      setIsSelectorOpened(prev => !prev);
   }

   return {isSelectorOpened, setIsSelectorOpened, toggleIsSelectorOpened, selectLanguage, selectedLanguage};
};

export default useLanguageSelector;