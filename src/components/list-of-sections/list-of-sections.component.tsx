import React, {useContext} from "react";
import {Link as ScrollLink} from "react-scroll";

// styles
import styles from "./list-of-sections.module.scss";

// data
import {availableSections} from "../../data/available-sections/available-sections";

// contexts
import {CurrentLanguageContext} from "../../providers/current-language/current-language-provider.component";

// interfaces
import { IMainPageContent } from "../../types/main-page-content.types";

interface IListOfSections {
   sticky?: boolean;
   hasBiggerSpacing?: boolean;
   handleOnClick?: () => void;
   pageContent: IMainPageContent;
}

const ListOfSections: React.FC<IListOfSections> = ({
      sticky,
      hasBiggerSpacing,
      handleOnClick,
      pageContent
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
                           // Solution for TS index error: https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
                           pageContent.section_available_sections[item.file_field_name as keyof typeof pageContent.section_available_sections]
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