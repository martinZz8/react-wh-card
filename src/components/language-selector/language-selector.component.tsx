import React, {useRef} from "react";

// styles
import styles from "./language-selector.module.scss";

// data
import {availableLanguages} from "../../data/available-languages.data";

// hooks
import useLanguageSelector from "./language-selector.hook";
import useOnClickOutside from "../../hooks/useOnClickOutside.hook";

// components
import LanguageSelectorItem from "./item/language-selector-item.component";

const LanguageSelector: React.FC = () => {
   const {isSelectorOpened, setIsSelectorOpened, toggleIsSelectorOpened, selectLanguage, selectedLanguage} = useLanguageSelector();
   const myRef = useRef<HTMLDivElement>(null);
   useOnClickOutside(myRef, () => setIsSelectorOpened(false));

   return (
      <div
         className={styles.selectorWrap}
         ref={myRef}
      >
         <LanguageSelectorItem
            countryId={selectedLanguage}
            isSelectedItem
            isOpen={isSelectorOpened}
            handleOnClick={() => toggleIsSelectorOpened()}
         />
         {
            isSelectorOpened ?
               <ul className={styles.listOfItems}>
                  {
                     availableLanguages.map((item, index) => (
                        <li key={item}>
                           <LanguageSelectorItem
                              countryId={item}
                              handleOnClick={() => {
                                 selectLanguage(item);
                              }}
                              noBorder={(index+1) === availableLanguages.length}
                           />
                        </li>
                     ))
                  }
               </ul>
            :
               null
         }
      </div>
   );
};

export default LanguageSelector;