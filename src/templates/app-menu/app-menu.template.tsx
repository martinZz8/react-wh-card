import React, {ReactNode} from "react";

// styles
import styles from "./app-menu.module.scss";

// interfaces
interface ITemplateAppMenu {
   children: ReactNode;
   includesNormalMenu?: boolean;
}

const TemplateAppMenu: React.FC<ITemplateAppMenu> = ({children, includesNormalMenu}) => {

   return (
      <div className={`${styles.appMenu} ${includesNormalMenu ? styles.includesNormalMenu : ""}`}>
         {children}
      </div>
   );
};

export default TemplateAppMenu;