import React from "react";

// styles
import styles from "./user-menu.module.scss";

// hooks
import useUserMenu from "./user-menu.hook";
import useElementVisibilityOnScroll from "../../../hooks/useElementVisibilityOnScroll.hook";

// components
import MainMobileMenu from "../../../components/main-mobile-menu/main-mobile-menu.component";

// interfaces
interface IUserMenu {
   includesNormalMenu?: boolean;
}

const UserMenu: React.FC<IUserMenu> = ({includesNormalMenu}) => {
   const {isMobileMenuOpen, setIsMobileMenuOpen, toggleIsMobileMenuOpen} = useUserMenu();
   const {isVisible: isMenuIconVisible} = useElementVisibilityOnScroll(800);

   return (
      <div className={styles.userMenuWrap}>
         <div
            className={`
              ${styles.mobileMenuIcon}
              ${!isMenuIconVisible ? styles.hidden : ""}
              ${includesNormalMenu ? styles.includesNormalMenu : ""}
            `}
            onClick={toggleIsMobileMenuOpen}
         >
            <i className={isMobileMenuOpen ? "icon-cancel" : "icon-menu"}/>
         </div>
         {/*here can be some normal menu in the future - for pc*/}
         {/*Mobile menu*/}
         <MainMobileMenu
            onOutClick={() => setIsMobileMenuOpen(false)}
            isOpened={isMobileMenuOpen}
         />
     </div>
   );
};

export default UserMenu;