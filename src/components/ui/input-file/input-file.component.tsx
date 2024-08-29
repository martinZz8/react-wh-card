import React, {ChangeEvent, useContext} from "react";

// styles
import styles from "./input-file.module.scss";

// enums
import { AvailablePagesEnum } from "../../../enums/available-pages.enums";

// hooks
import usePageContent from "../../../hooks/usePageContent.hook";

// contexts
import {LayoutColorContext} from "../../../providers/layout-color/layout-color-provider.component";

// interfaces
import { IMainPageContent } from "../../../types/main-page-content.types";
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
   const {layoutColor} = useContext(LayoutColorContext);
   const {pageContent} = usePageContent<IMainPageContent>(AvailablePagesEnum.Main);

   return (
      pageContent != null ?
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
                        title={pageContent?.section_mail.delete_files}
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
      :
         null
   );
};

export default InputFile;