import React, {useContext} from "react";

// styles
import styles from "./main-page-header.module.scss";

// context
import {CurrentLanguageContext} from "../../../../providers/current-language-provider.component";
import {WindowContext} from "../../../../providers/window-size-provider.component";

const MainPageHeader: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const {windowWidth, windowHeight} = useContext(WindowContext);

   return (
     <div className={styles.headerWrap}>
        <div className={styles.info}>
           <p className={`${styles.big} ${styles.paddingRight}`}>
              {
                 selectedLanguage === "PL" ?
                    "Biuro rachunkowe"
                    : selectedLanguage === "GB" ?
                       "Accounting firm"
                       ://DE
                       "Rechnungsstelle"
              }
              {
                 windowWidth < 800 ?
                    <br/>
                 :
                    null
              }
              {
                 " Wiesław Harbuz"
              }
           </p>
           <div className={styles.divider}/>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              {
                  selectedLanguage === "PL" ?
                     "Polska"
                  : selectedLanguage === "GB" ?
                     "Poland"
                  ://DE
                     "Polen"
              }
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              {
                 "Tomaszów Lubelski 22-600"
              }
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              {
                 selectedLanguage === "PL" ?
                     "ul. Rolnicza 10"
                 : selectedLanguage === "GB" ?
                    "Rolnicza 10 St."
                 ://DE
                    "Rolnicza 10 Str"
              }
           </p>
        </div>
        <div className={styles.movingArrowContainer}>
           <div className={styles.movingArrow}>
              <i className={"icon-down-open"}/>
           </div>
        </div>
     </div>
   );
};

export default MainPageHeader;