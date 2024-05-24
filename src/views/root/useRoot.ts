import {useContext} from "react";

// contexts
import {CurrentLanguageContext} from "../../providers/current-language/current-language-provider.component";

const useRoot = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   return {selectedLanguage};
};

export default useRoot;