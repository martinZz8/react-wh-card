import React from "react";

// styles
import styles from "./language-selector.module.scss";

// hooks
import useLanguageSelector from "./language-selector.hook";

const LanguageSelector: React.FC = () => {
   const {isSelectorOpened, setIsSelectorOpened, selectLanguage, selectedLanguage} = useLanguageSelector();

   return (
     <div className={styles.selectorWrap}>

     </div>
   );
};

export default LanguageSelector;