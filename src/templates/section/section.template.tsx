import React, {ReactNode} from "react";

// styles
import styles from "./section.module.scss";

// interfaces
interface ITemplateSection {
   id?: string;
   headerMess?: string;
   iconName?: string;
   children: ReactNode;
}

const TemplateSection: React.FC<ITemplateSection> = ({
      id,
      headerMess,
      iconName,
      children
   }) => {

   return (
     <div
        id={id}
        className={styles.sectionWrap}
     >
        <div className={styles.header}>
           <i className={iconName}/>
           <p>{headerMess}</p>
        </div>
        <div className={styles.content}>
           {children}
        </div>
     </div>
   );
};

export default TemplateSection;