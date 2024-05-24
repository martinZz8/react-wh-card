import React, {useContext} from "react";
import {Link as ScrollLink} from "react-scroll";

// styles
import styles from "./main-page-header.module.scss";

// context
import {WindowContext} from "../../../../providers/window-size/window-size-provider.component";
import {LayoutColorContext} from "../../../../providers/layout-color/layout-color-provider.component";

// components
import LanguageSelector from "../../../../components/language-selector/language-selector.component";
import ThemeColorPicker from "../../../../components/theme-color-picker.component.tsx/theme-color-picker.component";
import UaHelpInfo from "../../../../components/ua-help-info/ua-help-info.component";

// interfaces
import { IMainPageContent } from "../../../../types/main-page-content.types";

interface IMainPageHeader {
   pageContent: IMainPageContent;
};

const MainPageHeader: React.FC<IMainPageHeader> = ({pageContent}) => {
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
          <UaHelpInfo pageContent={pageContent}/>
        </div>
        <div className={styles.info}>
           <p className={`${styles.big} ${styles.paddingRight}`}>
              {
                 pageContent.section_main_page_header.title
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
                  pageContent.section_main_page_header.country
              }
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              Tomaszów Lubelski 22-600
              {
                  pageContent.section_main_page_header.street
              }
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              {
                 pageContent.section_main_page_header.email
              }
              biuro.harbuz@wp.pl
           </p>
           <p className={`${styles.medium} ${styles.spacingTop}`}>
              {
                 pageContent.section_main_page_header.telephone
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