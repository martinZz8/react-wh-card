import React, {useContext} from "react";

// styles
import styles from "./section-additional-info.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";
import {dayOfWeeks} from "./section-additional-info.data";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language-provider.component";

// hooks
import useAdditionalInfo from "./section-additional-info.hook";

const SectionAdditionalInfo: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const sectionInfo = availableSections.find(item => item.sectionId === "section-additional-info");
   const {todayDayNumber, checkIfIsOpened} = useAdditionalInfo();

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={
            selectedLanguage === "PL" ?
               sectionInfo?.PLName
            : selectedLanguage === "GB" ?
               sectionInfo?.GBName
            : selectedLanguage === "DE" ?
               sectionInfo?.DEName
            ://UA
               sectionInfo?.UAName

         }
         iconName={"icon-user"}
      >
         <div className={styles.wrapper}>
            <div className={styles.item}>
               <div className={styles.innerItem}>
                  <p className={`${styles.bold} ${styles.large} ${styles.underline}`}>
                  {
                     selectedLanguage === "PL" ?
                        "Email: "
                     : selectedLanguage === "GB" ?
                        "Email: "
                     : selectedLanguage === "DE" ?
                        "E-mail: "
                     ://UA
                        "Email: "
                  }
                  </p>
                  <p>biuro.harbuz@wp.pl</p>
               </div>
               <div className={styles.innerItem}>
                  <p className={`${styles.bold} ${styles.large} ${styles.underline}`}>
                  {
                     selectedLanguage === "PL" ?
                        "Telefon: "
                     : selectedLanguage === "GB" ?
                        "Phone: "
                     : selectedLanguage === "DE" ?
                        "Telefon: "
                     ://UA
                        "Телефон: "
                  }
                  </p>
                  <p>503 414 100</p>
               </div>
               <div className={styles.innerItem}>
                  <p className={`${styles.bold} ${styles.large} ${styles.underline}`}>
                  {
                     selectedLanguage === "PL" ?
                        "Adres: "
                     : selectedLanguage === "GB" ?
                        "Address: "
                     : selectedLanguage === "DE" ?
                        "Adresse: "
                     :
                        "Адреса: "
                  }
                  </p>
                  <p>
                     ul. Rolnicza 10
                     <br/>
                     22-600 Tomaszów Lubelski
                  </p>
               </div>
            </div>
            <div className={`${styles.item} ${styles.adjustedWidth}`}>
               <p className={styles.underline}>
                  {
                     selectedLanguage === "PL" ?
                        "Godziny otwarcia:"
                     : selectedLanguage === "GB" ?
                        "Opening hours:"
                     : selectedLanguage === "DE" ?
                        "Öffnungszeit:"
                     ://UA
                        "Години роботи:"
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
                                 selectedLanguage === "PL" ?
                                    item.PLName
                                 : selectedLanguage === "GB" ?
                                    item.GBName
                                 : selectedLanguage === "DE" ?
                                    item.DEName
                                 ://UA
                                    item.UAName
                              }
                           </p>
                           <p>
                              {
                                 item.isAWorkDay ?
                                    item.hourFrom+"-"+item.hourTo
                                 : selectedLanguage === "PL" ?
                                    "zamknięte"
                                 : selectedLanguage === "GB" ?
                                    "closed"
                                 : selectedLanguage === "DE" ?
                                    "getarnt"
                                 ://UA
                                    "ЗАЧИНЕНО"
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