import {useState, useEffect, useContext} from "react";

// contexts
import {CurrentLanguageContext} from "../../providers/current-language-provider.component";

const useRoot = () => {
   const [appVersion, setAppVersion] = useState<string>("");
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   // appVersion useEffect
   useEffect(() => {
      let valToSet = "";

      if (selectedLanguage === "PL") {
         valToSet = "Biuro rachunkowe Wiesław Harbuz";
      }
      else if (selectedLanguage === "GB") {
         valToSet = "Accounting Office Wiesław Harbuz";
      }
      else if (selectedLanguage === "DE") {
         valToSet = "Das Buchhaltungsbüro Wiesław Harbuz";
      }
      else {//UA
         valToSet = "Бухгалтерська контора";
      }

      setAppVersion(valToSet);
   },[selectedLanguage]);

   return {appVersion};
};

export default useRoot;