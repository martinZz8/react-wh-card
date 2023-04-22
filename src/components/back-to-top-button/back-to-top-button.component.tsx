import React, {useContext} from "react";
import {animateScroll as scroll} from "react-scroll";

// styles
import styles from "./back-to-top-button.module.scss";

// hooks
import useBackToTopButton from "./back-to-top-button.hook";

// contexts
import {CurrentLanguageContext} from "../../providers/current-language/current-language-provider.component";

const BackToTopButton: React.FC = () => {
   const {isShowed} = useBackToTopButton();
   const {selectedLanguage} = useContext(CurrentLanguageContext);

   return (
      <div
         className={`
            ${styles.buttonWrap}
            ${isShowed ? styles.isShowed : ""}
         `}
         onClick={() => scroll.scrollToTop({
            duration: 500
         })}
         title={
            selectedLanguage === "PL" ?
               "Idź do góry"
            : selectedLanguage === "GB" ?
               "Go up"
            : selectedLanguage === "DE" ?
               "Geh hinauf"
            ://UA
               "Підніматися"
         }
      >
         <i className={"icon-down-open"}/>
      </div>
   );
};

export default BackToTopButton;