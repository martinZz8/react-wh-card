import { useContext, useEffect, useState } from "react";

// providers
import { CurrentLanguageContext } from "../providers/current-language/current-language-provider.component";

// enums
import { AvailablePagesEnum } from "../enums/available-pages.enums";

const usePageContent = <T>(page_name: AvailablePagesEnum) => {
    const [pageContent, setPageContent] = useState<T | null>(null);
    const {selectedLanguage} = useContext(CurrentLanguageContext);

    // Load main page content every time language changes
    useEffect(() => {
        const laodMainContent = async () => {
            const pathToJsonFile = `${page_name}_lang_${selectedLanguage.toLowerCase()}.json`;
            
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
               console.log(`Error during loading main page data: ${error}`);
            }         
         };
   
         laodMainContent();
    },[selectedLanguage, page_name]);

    return {pageContent};
};

export default usePageContent;