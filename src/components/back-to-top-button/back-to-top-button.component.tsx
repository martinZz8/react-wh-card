import React from "react";
import {animateScroll as scroll} from "react-scroll";

// styles
import styles from "./back-to-top-button.module.scss";

// hooks
import useBackToTopButton from "./back-to-top-button.hook";
import usePageContent from "../../hooks/usePageContent.hook";

// enums
import { AvailablePagesEnum } from "../../enums/available-pages.enums";

// interfaces
import { IMainPageContent } from "../../types/main-page-content.types";

const BackToTopButton: React.FC = () => {
   const {pageContent} = usePageContent<IMainPageContent>(AvailablePagesEnum.Main);

   const {isShowed} = useBackToTopButton();

   return (
      pageContent != null ?
         <div
            className={`
               ${styles.buttonWrap}
               ${isShowed ? styles.isShowed : ""}
            `}
            onClick={() => scroll.scrollToTop({
               duration: 500
            })}
            title={pageContent.section_back_to_top_button.title}
         >
            <i className={"icon-down-open"}/>
         </div>
      :
         null
   );
};

export default BackToTopButton;