import React, {useContext} from "react";
import {Link as ScrollLink} from "react-scroll";

// styles
import styles from "./main-page-header.module.scss";

// context
import {CurrentLanguageContext} from "../../../../providers/current-language/current-language-provider.component";
import {WindowContext} from "../../../../providers/window-size/window-size-provider.component";
import {LayoutColorContext} from "../../../../providers/layout-color/layout-color-provider.component";

// components
import LanguageSelector from "../../../../components/language-selector/language-selector.component";
import ThemeColorPicker from "../../../../components/theme-color-picker.component.tsx/theme-color-picker.component";
import UaHelpInfo from "../../../../components/ua-help-info/ua-help-info.component";

const MainPageHeader: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const {windowWidth} = useContext(WindowContext);
   const {layoutColor} = useContext(LayoutColorContext);

   return (
     <div className={styles.headerWrap}>
        <div className={`
          ${styles.bgImage}
          ${!(layoutColor === "dark") ? styles.light : ""}
        `}/>
        {/*UA help bar*/}
        <div className={`
          ${styles.uaHelpBar}
          ${!(layoutColor === "dark") ? styles.light : ""}
        `}>
          <UaHelpInfo/>
        </div>
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
           <ScrollLink
              className={styles.movingArrow}
              to={"section-about-company"}
              smooth
              duration={500}
              offset={-10}
           >
              <i className={"icon-down-open"}/>
           </ScrollLink>
        </div>
        <div className={styles.languageSelectorWrap}>
          <LanguageSelector/>
        </div>
       <div className={styles.themeColorPickerWrap}>
         <ThemeColorPicker/>
       </div>
     </div>
   );
};

export default MainPageHeader;