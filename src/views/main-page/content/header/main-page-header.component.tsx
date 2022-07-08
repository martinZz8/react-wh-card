import React, {useContext} from "react";

// styles
import styles from "./main-page-header.module.scss";

// context
import {CurrentLanguageContext} from "../../../../providers/current-language-provider.component";
import {WindowContext} from "../../../../providers/window-size-provider.component";

// components
import LanguageSelector from "../../../../components/language-selector/language-selector.component";

const MainPageHeader: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const {windowWidth, windowHeight} = useContext(WindowContext);

   return (
     <div className={styles.headerWrap}>
        <div className={styles.bgImage}/>
        <div className={styles.info}>
           <p className={`${styles.big} ${styles.paddingRight}`}>
              {
                 selectedLanguage === "PL" ?
                    "Biuro rachunkowe"
                 : selectedLanguage === "GB" ?
                    "Accounting office"
                 : selectedLanguage === "DE" ?
                    "Rechnungsstelle"
                 ://UA
                    "бухгалтерія"
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
                  : selectedLanguage === "DE" ?
                     "Polen"
                  ://UA
                     "Польща"
              }
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              Tomaszów Lubelski 22-600
              {
                  selectedLanguage === "PL" ?
                     " ul. Rolnicza 10"
                  : selectedLanguage === "GB" ?
                     " Rolnicza 10 St."
                  : selectedLanguage === "DE" ?
                     " Rolnicza 10 Str"
                  ://UA
                     " вул. Rolnicza 10"
              }
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              {
                 selectedLanguage === "PL" ?
                  "Email: "
                 : selectedLanguage === "GB" ?
                  "Email: "
                 : selectedLanguage === "DE" ?
                    "E-mail: "
                 ://UA
                     "Email: "
              }
              biuro.harbuz@wp.pl
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              {
                 selectedLanguage === "PL" ?
                     "Telefon: "
                 : selectedLanguage === "GB" ?
                     "Phone: "
                 : selectedLanguage === "DE" ?
                     "Telefon: "
                 ://UA
                     "Телефон: "
              }
              503 414 100
           </p>
        </div>
        <div className={styles.movingArrowContainer}>
           <a
              className={styles.movingArrow}
              href={`#section-about-company`}
           >
              <i className={"icon-down-open"}/>
           </a>
        </div>
        <div className={styles.languageSelectorWrap}>
           <LanguageSelector/>
        </div>
     </div>
   );
};

export default MainPageHeader;