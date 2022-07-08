import {useState, useEffect, useContext} from "react";

// contexts
import {CurrentLanguageContext} from "../../providers/current-language-provider.component";

const useRoot = () => {
   const [appVersion, setAppVersion] = useState<string>("");
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   // smooth navigation to sections from anchors
   useEffect(() => {
      const getAllAnchors = () => {
         return document.querySelectorAll('a[href^="#"]');
      };

      const handleClick = (anchor: Element, e: Event) => {
         e.preventDefault();

         const attribute = anchor.getAttribute("href");
         if (attribute) {
            let elements = document.querySelectorAll(attribute);
            elements.forEach(elem => {
               elem.scrollIntoView({
                  behavior: "smooth"
               });
            })
         }
      };

      getAllAnchors().forEach(anchor => {
         anchor.addEventListener("click",  (e) => handleClick(anchor, e));
      });

      return () => {
         getAllAnchors().forEach(anchor => {
            anchor.removeEventListener("click", (e) => handleClick(anchor, e));
         });
      };
   }, []);

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