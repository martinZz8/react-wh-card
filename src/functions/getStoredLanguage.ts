// data
import {availableLanguages} from "../data/available-languages.data";

const getStoredLanguage = (): string => {
   //console.log("I'm here!");
   let storedLanguage = localStorage.getItem("language");
   let toRet: string = "PL";

   if (storedLanguage !== null && availableLanguages.includes(storedLanguage)) {
      toRet = storedLanguage;
   }
   else {
      localStorage.setItem("language", "PL");
   }

   return toRet;
};

export default getStoredLanguage;