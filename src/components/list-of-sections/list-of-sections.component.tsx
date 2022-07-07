import React, {useContext} from "react";

// styles
import styles from "./list-of-sections.module.scss";

// data
import {availableSections} from "../../data/available-sections/available-sections";

// contexts
import {CurrentSectionContext} from "../../providers/current-section-provider.component";
import {CurrentLanguageContext} from "../../providers/current-language-provider.component";

// interfaces
interface IListOfSections {
   sticky?: boolean;
   handleOnClick?: () => void;
}

const ListOfSections: React.FC<IListOfSections> = ({sticky, handleOnClick}) => {
   const {currentSection} = useContext(CurrentSectionContext);
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   return (
     <div className={`${styles.listOfSectionsWrap} ${sticky ? styles.sticky : ""}`}>
         <ul>
            {
               availableSections.map(item => (
                  <li
                     key={item.sectionId}
                     className={`
                        ${currentSection === item.sectionId ? styles.activeItem : ""}
                        ${selectedLanguage === "PL" ? styles.nowrap : ""}
                     `}
                  >
                     <a
                        href={`#${item.sectionId}`}
                        onClick={() => handleOnClick && handleOnClick()}
                     >
                        {
                           selectedLanguage === "PL" ?
                              item.PLName
                           : selectedLanguage === "GB" ?
                              item.GBName
                           ://DE
                              item.DEName
                        }
                     </a>
                  </li>
               ))
            }
         </ul>
     </div>
   );
};

export default ListOfSections;