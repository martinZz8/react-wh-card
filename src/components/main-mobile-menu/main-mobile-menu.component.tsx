import React from "react";

// styles
import styles from "./main-mobile-menu.module.scss";

// templates
import TemplateBasicModal from "../../modals/basic-modal/basic-modal.component";

// components
import ListOfSections from "../list-of-sections/list-of-sections.component";

// interfaces
interface IMainMobileMenu {
   onOutClick: () => void;
   isOpened?: boolean;
}

const MainMobileMenu: React.FC<IMainMobileMenu> = ({onOutClick, isOpened}) => {

   return (
      <TemplateBasicModal
         onOutClick={onOutClick}
         isOpened={isOpened}
      >
         <div className={`customScrollBar ${styles.mainMobileMenu} ${isOpened ? styles.opened : ""}`}>
            <ListOfSections
               handleOnClick={() => onOutClick()}
            />
         </div>
      </TemplateBasicModal>
   );
};

export default MainMobileMenu;