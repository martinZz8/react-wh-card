import React, {ChangeEvent} from "react";

// styles
import styles from "./input-file.module.scss";

// interfaces
interface IInputFile {
   name: string;
   label: string;
   handleOnChange: (name: string, files: FileList | null) => void;
   disabled?: boolean;
   isMandatory?: boolean;
}

const InputFile: React.FC<IInputFile> = ({
      name,
      label,
      handleOnChange,
      disabled,
      isMandatory
   }) => {

   return (
      <div className={styles.inputFile}>
         <input
            className={styles.input}
            type="file"
            multiple
            name={name}
            onChange={ (e: ChangeEvent<HTMLInputElement>) => handleOnChange(e.target.name, e.target.files)}
            disabled={disabled}
         />
      </div>
   );
};

export default InputFile;