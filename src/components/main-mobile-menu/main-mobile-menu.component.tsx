import React from "react";

// styles
import styles from "./main-mobile-menu.module.scss";

// templates
import TemplateBasicModal from "../../modals/basic-modal/basic-modal.component";

// components
import ListOfSections from "../list-of-sections/list-of-sections.component";
import usePageContent from "../../hooks/usePageContent.hook";
import { IMainPageContent } from "../../types/main-page-content.types";
import { AvailablePagesEnum } from "../../enums/available-pages.enums";

// interfaces
interface IMainMobileMenu {
   onOutClick: () => void;
   isOpened: boolean;
}

const MainMobileMenu: React.FC<IMainMobileMenu> = ({onOutClick, isOpened}) => {
   const {pageContent} = usePageContent<IMainPageContent>(AvailablePagesEnum.Main);

   return (
      <TemplateBasicModal
         onOutClick={onOutClick}
         isOpened={isOpened}
      >
         <div className={`customScrollBar ${styles.mainMobileMenu} ${isOpened ? styles.opened : ""}`}>
            {
               pageContent != null ?
                  <ListOfSections
                     handleOnClick={() => onOutClick()}
                     hasBiggerSpacing
                     pageContent={pageContent}
                  />
               :
                  null
            }            
         </div>
      </TemplateBasicModal>
   );
};

export default MainMobileMenu;