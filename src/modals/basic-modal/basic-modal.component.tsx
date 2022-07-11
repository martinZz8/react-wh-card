import React, {ReactNode, useEffect} from "react";

// styles
import styles from "./basic-modal.module.scss";

// interfaces
interface ITemplateBasicModal {
   children: ReactNode;
   onOutClick?: () => void;
   isOpened: boolean;
}

const TemplateBasicModal: React.FC<ITemplateBasicModal> = ({
      children,
      onOutClick,
      isOpened
  }) => {

   // useEffect that changes the visibility of the side scroll bar
   useEffect(() => {
      if (isOpened) {
         document.body.style.overflowY = "hidden";
      }
      else {
         document.body.style.overflowY = "auto";
      }
   },[isOpened]);

   return (
      <div className={`
         ${styles.basicModal}
         ${isOpened ? styles.visible : ""}
      `}>
         <div
            className={`
               ${styles.background}
               ${onOutClick ? styles.cursorPointer : ""}
            `}
            onClick={() => {
               onOutClick && onOutClick();
            }}
         />
         <div className={styles.content}>
            {children}
         </div>
      </div>
   );
};

export default TemplateBasicModal;