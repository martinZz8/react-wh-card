import React from "react";

// styles
import styles from "./main-page-content.module.scss";

// components
import MainPageHeader from "./header/main-page-header.component";
import ListOfSections from "../../../components/list-of-sections/list-of-sections.component";

// components of sections
import SectionAboutCompany from "./section-about-company/section-about-company.component";
import SectionAdditionalInfo from "./section-additional-info/section-additional-info.component";
import SectionLocation from "./section-location/section-location.component";
import SectionMail from "./section-mail/section-mail.component";

const MainPageContent: React.FC = () => {

   return (
     <div className={styles.mainWrap}>
         <MainPageHeader/>
         <div className={styles.middleContentWrap}>
            {/*List of sections*/}
            <div className={styles.listOfSectionsContainer}>
               <ListOfSections sticky/>
            </div>
            <SectionAboutCompany/>{/*section-about-company*/}
            <SectionAdditionalInfo/>{/*section-additional-info-info*/}
            <SectionLocation/>{/*section-location*/}
            <SectionMail/>{/*section-mail*/}
            {/*section-photo-gallery*/}
            <div id={"section-photo-gallery"} style={{backgroundColor: "orange", height: "500px", width: "100%"}}>
               section-photo-gallery
            </div>
         </div>
     </div>
   );
};

export default MainPageContent;