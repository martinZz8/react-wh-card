import React from "react";

// styles
import styles from "./footer.module.scss";

// components
import UaHelpInfo from "../ua-help-info/ua-help-info.component";

// hooks
import usePageContent from "../../hooks/usePageContent.hook";

// enums
import { AvailablePagesEnum } from "../../enums/available-pages.enums";

// interfaces
import { IMainPageContent } from "../../types/main-page-content.types";

const Footer: React.FC = () => {
   const {pageContent} = usePageContent<IMainPageContent>(AvailablePagesEnum.Main);

   return (
      pageContent != null ?
         <div className={styles.footerWrap}>
            <div className={styles.footerInfo}>
               <UaHelpInfo
                  smallFont
                  pageContent={pageContent}
               />
            </div>
            <div className={styles.footerInfo}>
               <div className={styles.item}>
                  <p>
                     {
                        pageContent.section_footer.all_rights_reserved
                     }
                     <span className={styles.copyright}> &copy;</span> {new Date().getFullYear()}
                  </p>
               </div>
               <div className={styles.item}>
                  <p>
                     {
                        pageContent.section_footer.made_by
                     }
                     <br/>
                     <a href="mailto: martinzz.info@gmail.com">Maciej Harbuz</a>
                  </p>
               </div>
            </div>
            <div className={styles.footerIcons}>
               <a
                  href={"https://www.google.com/search?&q=biuro+wieslaw+harbuz"}
                  target={"_blank"}
                  rel="noopener noreferrer"
               >
                  <div className={styles.imageWrap}>
                     <i className={"icon-google"}/>
                  </div>
               </a>
            </div>
         </div>
      :
         null
   );
};

export default Footer;