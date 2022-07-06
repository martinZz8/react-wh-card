import {useState, useEffect, useContext} from "react";

import {WindowContext} from "../../../providers/window-size-provider.component";

const useUserMenu = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
   const {windowWidth, windowHeight} = useContext(WindowContext);

   useEffect(() => {
      if (windowWidth > 1250) {
         setIsMobileMenuOpen(false);
      }
   },[windowWidth]);

   const toggleIsMobileMenuOpen = () => {
      setIsMobileMenuOpen(prev => !prev);
   };

   return {isMobileMenuOpen, setIsMobileMenuOpen, toggleIsMobileMenuOpen};
};
export default useUserMenu;