import React, {ChangeEvent, useContext} from "react";

// styles
import styles from "./input-file.module.scss";

// context
import {CurrentLanguageContext} from "../../../providers/current-language/current-language-provider.component";
import {LayoutColorContext} from "../../../providers/layout-color/layout-color-provider.component";

// interfaces
interface IInputFile {
   name: string;
   label: string;
   keyVal?: string;
   onDeleteClick?: () => void;
   handleOnChange: (name: string, files: FileList | null) => void;
   acceptedFileFormats?: string[];
   multiple?: boolean;
   disabled?: boolean;
   isMandatory?: boolean;
   isError?: boolean;
   errorMessage?: string;
}

const InputFile: React.FC<IInputFile> = ({
      name,
      label,
      keyVal,
      onDeleteClick,
      handleOnChange,
      acceptedFileFormats,
      multiple,
      disabled,
      isMandatory,
      isError,
      errorMessage
   }) => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
  const {layoutColor} = useContext(LayoutColorContext);

   return (
      <div className={styles.inputFile}>
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
         <div className={styles.inputWrap}>
            <input
               className={`
                  ${styles.input}
                  ${!(layoutColor === "dark") ? styles.light : ""}
                  ${isError && !disabled ? styles.errorInput : ""}
                  ${disabled ? styles.disabled : ""}
                  ${disabled ? "noSelect" : ""}
               `}
               key={keyVal}
               type="file"
               name={name}
               accept={acceptedFileFormats && acceptedFileFormats.join(", ")}
               multiple={multiple}
               onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e.target.name, e.target.files)}
               disabled={disabled}
            />
            {
               onDeleteClick ?
                  <div
                     className={`
                        ${styles.deleteButton}
                        ${disabled ? styles.disabled : ""}
                     `}
                     onClick={() => !disabled && onDeleteClick()}
                     title={
                        selectedLanguage === "PL" ?
                           "Usuń pliki"
                        : selectedLanguage === "EN" ?
                           "Delete files"
                        : selectedLanguage === "DE" ?
                           "Dateien löschen"
                        ://UA
                           "Видалити файли"
                     }
                  >
                     <i className={"icon-cancel"}/>
                  </div>
               :
                  null
            }
         </div>
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

export default InputFile;