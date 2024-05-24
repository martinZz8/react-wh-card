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
import SectionPhotoGallery from "./section-photo-gallery/section-photo-gallery.component";

// interfaces
import { IMainPageContent } from "../../../types/main-page-content.types";

interface IMainPageViewContent {
   pageContent: IMainPageContent;
};

const MainPageContent: React.FC<IMainPageViewContent> = ({pageContent}) => {

   return (
     <div className={styles.mainWrap}>
         <MainPageHeader pageContent={pageContent}/>
         <div className={styles.middleContentWrap}>
            {/*List of sections*/}
            <div className={styles.listOfSectionsContainer}>
               <ListOfSections
                  sticky
                  pageContent={pageContent}
               />
            </div>
            {/*Particular sections*/}
            <SectionAboutCompany pageContent={pageContent}/>{/*section-about-company*/}
            <SectionAdditionalInfo pageContent={pageContent}/>{/*section-additional-info-info*/}
            <SectionLocation pageContent={pageContent}/>{/*section-location*/}
            <SectionMail pageContent={pageContent}/>{/*section-mail*/}
            <SectionPhotoGallery pageContent={pageContent}/>{/*section-photo-gallery*/}
         </div>
     </div>
   );
};

export default MainPageContent;