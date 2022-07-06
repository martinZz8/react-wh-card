import React from "react";

// styles
import styles from "./main-mobile-menu.module.scss";

// templates
import TemplateBasicModal from "../../modals/basic-modal/basic-modal.component";

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
            {/*here will be list of sections with visible active ones*/}
         </div>
      </TemplateBasicModal>
   );
};

export default MainMobileMenu;