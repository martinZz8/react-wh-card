import { useContext, useEffect, useState } from "react";

// providers
import { CurrentLanguageContext } from "../providers/current-language/current-language-provider.component";

// enums
import { AvailablePagesEnum } from "../enums/available-pages.enums";

const usePageContent = <T>(page_name: AvailablePagesEnum) => {
   const [pageContent, setPageContent] = useState<T | null>(null);
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   // Load main page content every time language changes
   const laodMainContent = async () => {
      const pathToJsonFile = `page_content/${page_name}/lang_${selectedLanguage.toLowerCase()}.json`;

      try {
        const response = await fetch(pathToJsonFile);

        if (response.ok) {
            const loadedData = await response.json() as T;
            setPageContent(loadedData);
        }
        else {
            throw new Error();
        }
      }
      catch(error) {
         console.log(`Unexpected error occured during loading "${page_name}" page data:\n${error}`);
      }         
   };

   useEffect(() => {
      laodMainContent();
   },[selectedLanguage, page_name]);

   return {pageContent};
};

export default usePageContent;