import React from "react";

// styles
import styles from "./button.module.scss";

// interfaces
interface IButton {
   type: "submit" | "button";
   title: string;
   backgroundColor: "black" | "red" | "lemonGreen";
   fontColor: "white" | "black";
   handleOnClick?: () => void;
   disabled?: boolean;
   noBorderRadius?: boolean;
   defaultCursor?: boolean;
}

const Button: React.FC<IButton> = ({
     type, title, backgroundColor, fontColor, handleOnClick, disabled, noBorderRadius, defaultCursor
  }) => {
   const stylesBackgroundColor = backgroundColor === "red" ? styles.backgroundColorRed : backgroundColor === "lemonGreen" ? styles.backgroundColorLemonGreen : styles.backgroundColorBlack;
   const stylesFontColor = fontColor === "white" ? styles.fontColorWhite : styles.fontColorBlack;
   const hoverColors =
      backgroundColor === "lemonGreen" ?
         styles.hoverColorsLemonGreen
      : backgroundColor === "red" ?
         styles.hoverColorsRed
      :
         styles.hoverColorsBlack

   return (
      <div className={styles.buttonWrap}>
         <button
            className={`
               ${styles.button}
               ${!disabled ? stylesBackgroundColor : ""}
               ${!disabled ? stylesFontColor : ""}
               ${!disabled ? hoverColors : ""}
               ${disabled ? styles.disabledColors : ""}
               ${noBorderRadius ? styles.noBorderRadius : ""}
               ${defaultCursor ? styles.defaultCursor : ""}
           `}
            type={type}
            onClick={() => handleOnClick && handleOnClick()}
            disabled={disabled}
         >
            {title}
         </button>
      </div>
   );
};

export default Button;