import React, {useContext} from "react";
import {Link as ScrollLink} from "react-scroll";

// styles
import styles from "./list-of-sections.module.scss";

// data
import {availableSections} from "../../data/available-sections/available-sections";

// contexts
import {CurrentLanguageContext} from "../../providers/current-language-provider.component";

// interfaces
interface IListOfSections {
   sticky?: boolean;
   hasBiggerSpacing?: boolean;
   handleOnClick?: () => void;
}

const ListOfSections: React.FC<IListOfSections> = ({
      sticky,
      hasBiggerSpacing,
      handleOnClick
   }) => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   return (
     <div className={`${styles.listOfSectionsWrap} ${sticky ? styles.sticky : ""}`}>
         <ul>
            {
               availableSections.map(item => (
                  <li
                     key={item.sectionId}
                     className={`
                        ${selectedLanguage === "PL" ? styles.nowrap : ""}
                        ${hasBiggerSpacing ? styles.biggerSpacing : ""}
                     `}
                  >
                     <ScrollLink
                        activeClass={styles.active}
                        spy
                        to={item.sectionId}
                        smooth
                        duration={500}
                        offset={-10}
                        isDynamic={item.sectionId === "section-photo-gallery"}
                        onClick={() => handleOnClick && handleOnClick()}
                     >
                        {
                           selectedLanguage === "PL" ?
                              item.PLName
                           : selectedLanguage === "GB" ?
                              item.GBName
                           :selectedLanguage === "DE" ?
                              item.DEName
                           ://UA
                              item.UAName
                        }
                     </ScrollLink>
                  </li>
               ))
            }
         </ul>
     </div>
   );
};

export default ListOfSections;