import React from "react";

// styles
import styles from "./section-additional-info.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";
import {dayOfWeeks} from "./section-additional-info.data";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// hooks
import useAdditionalInfo from "./section-additional-info.hook";

// interfaces
import { IMainPageContent } from "../../../../types/main-page-content.types";

interface ISectionAdditionalInfo {
   pageContent: IMainPageContent;
};

const SectionAdditionalInfo: React.FC<ISectionAdditionalInfo> = ({pageContent}) => {
   const sectionInfo = availableSections.find(item => item.sectionId === "section-additional-info");
   const {todayDayNumber, checkIfIsOpened} = useAdditionalInfo();

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={pageContent.section_available_sections[sectionInfo?.file_field_name as keyof typeof pageContent.section_available_sections]}
         iconName={"icon-user"}
      >
         <div className={styles.wrapper}>
            <div className={`
               ${styles.item}
               ${styles.spacing}
            `}>
               <div className={styles.innerItem}>
                  <p className={`${styles.bold} ${styles.large} ${styles.underline}`}>
                  {
                     pageContent.section_additional_info.email
                  }
                  </p>
                  <p>biuro.harbuz@wp.pl</p>
               </div>
               <div className={styles.innerItem}>
                  <p className={`${styles.bold} ${styles.large} ${styles.underline}`}>
                  {
                     pageContent.section_additional_info.telephone
                  }
                  </p>
                  <p>503 414 100</p>
               </div>
               <div className={styles.innerItem}>
                  <p className={`${styles.bold} ${styles.large} ${styles.underline}`}>
                  {
                     pageContent.section_additional_info.address
                  }
                  </p>
                  <p>
                     ul. Rolnicza 10
                     <br/>
                     22-600 Tomaszów Lubelski
                  </p>
               </div>
            </div>
            <div className={`
               ${styles.item}
               ${styles.adjustedWidth}
            `}>
               <p className={styles.underline}>
                  {
                     pageContent.section_additional_info.open_hours
                  }
               </p>
               <ul>
                  {
                     dayOfWeeks.map(item => (
                        <li
                           key={item.id}
                           className={
                              todayDayNumber === item.id ?
                                 checkIfIsOpened() ?
                                    styles.isOpened
                                 :
                                    styles.isClosed
                              :
                                 ""
                           }
                        >
                           <p>
                              {
                                 pageContent.section_additional_info.day_of_week[item.file_day_name as keyof typeof pageContent.section_additional_info.day_of_week]
                              }
                           </p>
                           <p>
                              {
                                 item.isAWorkDay ?
                                    item.hourFrom+"-"+item.hourTo
                                 :
                                    pageContent.section_additional_info.closed
                              }
                           </p>
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>
      </SectionTemplate>
   );
};

export default SectionAdditionalInfo;