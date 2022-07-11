import React, {ChangeEvent} from "react";

// styles
import styles from "./text-area.module.scss";

// interfaces
interface ITextArea {
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

const TextArea: React.FC<ITextArea> = ({
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

   return (
      <div className={styles.textAreaWrap}>
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
         <textarea
            className={`
               customScrollBar
               ${styles.textArea}
               ${isError && !disabled ? styles.errorTextArea : ""}
               ${disabled ? styles.disabled : ""}
               ${disabled ? "noSelect" : ""}
            `}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => handleOnChange(e.target.name, e.target.value)}
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

export default TextArea;