import React, {ChangeEvent, ReactNode, useContext} from "react";

// styles
import styles from "./checkbox.module.scss";

// context
import {LayoutColorContext} from "../../../providers/layout-color/layout-color-provider.component";

// interfaces
interface ICheckbox {
   name: string;
   value: string;
   checked?: boolean;
   label: string | ReactNode;
   isError?: boolean;
   handleOnChange: (name: string, value: string, checked: boolean) => void;
   disabled?: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({
      name,
      value,
      checked,
      label,
      isError,
      handleOnChange,
      disabled
   }) => {
  const {layoutColor} = useContext(LayoutColorContext);

   return (
      <label
         className={`
            noSelect
            ${styles.container}
            ${disabled ? styles.disabledContainer : ""}
            ${isError ? styles.isError : ""}
         `}
      >
         {label}
         <input
            className={disabled ? styles.disabledInput : ""}
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e.target.name, e.target.value, e.target.checked)}
            disabled={disabled}
         />
         <span
            className={`
              ${styles.checkmark}
              ${!(layoutColor === "dark") ? styles.light : ""}
              ${disabled ? styles.disabledColors : ""}
            `}/>
      </label>
   );
};

export default Checkbox;