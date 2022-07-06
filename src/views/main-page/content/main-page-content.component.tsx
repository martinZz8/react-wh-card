import React from "react";

// styles
import styles from "./main-page-content.module.scss";

// components
import MainPageHeader from "./header/main-page-header.component";

const MainPageContent: React.FC = () => {

   return (
     <div className={styles.mainWrap}>
         <MainPageHeader/>
         <div className={styles.middleContentWrap}>

         </div>
     </div>
   );
};

export default MainPageContent;