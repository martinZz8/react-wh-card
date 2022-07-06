import React, {useContext} from "react";

// styles
import styles from "./footer.module.scss";

// context
import {CurrentLanguageContext} from "../../providers/current-language-provider.component";

const Footer: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   return (
      <div className={styles.footerWrap}>
        <div className={styles.footerInfo}>
           <div className={styles.item}>
              <p>
                 {
                    selectedLanguage === "PL" ?
                       "Wszelkie prawa zastrzeżone"
                       :   selectedLanguage === "GB" ?
                          "All rights reserved"
                          : //DE
                          "Alle Rechte vorbehalten"
                 }
                 <span className={styles.copyright}> &copy;</span> {new Date().getFullYear()}
              </p>
           </div>
           <div className={styles.item}>
              <p>
                 {
                    selectedLanguage === "PL" ?
                       "Wykonane przez: "
                       :   selectedLanguage === "GB" ?
                          "Made by: "
                          : //DE
                          "Hergestellt von: "
                 }
                 Maciej Harbuz
              </p>
           </div>
        </div>
        <div className={styles.footerIcons}>
           <a
              href={"https://www.google.com/search?&q=biuro+wieslaw+harbuz"}
              target={"_blank"}
           >
              <div className={styles.imageWrap}>
                 <i className={"icon-google"}/>
              </div>
           </a>
        </div>
      </div>
   );
};

export default Footer;