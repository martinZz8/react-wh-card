import React from "react";

// styles
import styles from "./theme-color-picker.module.scss";

// hooks
import useThemeColorPicker from "./theme-color-picker.hook";

const ThemeColorPicker: React.FC = () => {
  const {layoutColor, swapLayoutColor} = useThemeColorPicker();

  return (
    <div
      className={styles.layoutColorPicker}
      onClick={swapLayoutColor}
    >
      <div className={`
        ${styles.picker}
        ${!(layoutColor === "dark") ? styles.light : ""}
      `}/>
      <div className={`icon-moon ${styles.moon}`}/>
      <div className={`icon-sun ${styles.sun}`}/>
    </div>
  );
};

export default ThemeColorPicker;