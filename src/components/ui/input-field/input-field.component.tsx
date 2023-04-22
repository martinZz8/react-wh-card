import React, {ChangeEvent, useContext} from "react";

// styles
import styles from "./input-field.module.scss";

// context
import {LayoutColorContext} from "../../../providers/layout-color/layout-color-provider.component";

// interfaces
interface IInputField {
   type: "text" | "password" | "email" | "number";
   name: string;
   value: string;
   label?: string;
   placeholder: string;
   isError?: boolean;
   errorMessage?: string;
   handleOnChange: (name: string, value: string) => void;
   disabled?: boolean;
   isMandatory?: boolean;
}

const InputField: React.FC<IInputField> = ({
    type,
    name,
    value,
    label,
    placeholder,
    isError,
    errorMessage,
    handleOnChange,
    disabled,
    isMandatory
   }) => {
  const {layoutColor} = useContext(LayoutColorContext);

   return (
     <div className={styles.inputField}>
        {
           label ?
              <div className={`${styles.label}`}>
                 <p>{label}</p>
                 {
                    isMandatory ?
                       <span className={styles.mandatory}>
                          *
                       </span>
                    :
                       null
                 }
              </div>
           :
              null
        }
        <input
           className={`
              ${styles.input}
              ${!(layoutColor === "dark") ? styles.light : ""}
              ${isError && !disabled ? styles.errorInput : ""}
              ${disabled ? styles.disabled : ""}
              ${disabled ? "noSelect" : ""}
           `}
           type={type}
           name={name}
           value={value}
           placeholder={placeholder}
           onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e.target.name, e.target.value)}
           disabled={disabled}
        />
        <div className={styles.errorMessage}>
           {
              isError && errorMessage !== "" && !disabled ?
                 <p>{errorMessage}</p>
              :
                 null
           }
        </div>
     </div>
   );
};

export default InputField;