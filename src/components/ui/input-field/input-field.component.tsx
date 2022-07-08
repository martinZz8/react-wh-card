import React, {ChangeEvent} from "react";

// styles
import styles from "./input-field.module.scss";

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
}

const InputField: React.FC<IInputField> = ({
    type, name, value, label, placeholder, isError, errorMessage, handleOnChange, disabled
   }) => {

   return (
     <div className={styles.inputField}>
        {
           label ?
              <div className={styles.label}>
                 <p>{label}</p>
              </div>
           :
              null
        }
        <input
           className={`${styles.input} ${isError && !disabled ? styles.errorInput : ""} ${disabled ? styles.disabled : ""}`}
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