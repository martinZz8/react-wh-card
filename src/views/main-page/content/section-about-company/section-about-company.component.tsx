import React from "react";

// styles
import styles from "./section-about-company.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// interfaces
import { IMainPageContent } from "../../../../types/main-page-content.types";

interface ISectionAboutCompany {
   pageContent: IMainPageContent;
};

const SectionAboutCompany: React.FC<ISectionAboutCompany> = ({pageContent}) => {
   const sectionInfo = availableSections.find(item => item.sectionId === "section-about-company");

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={pageContent.section_available_sections[sectionInfo?.file_field_name as keyof typeof pageContent.section_available_sections]}
         iconName={"icon-doc-inv"}
      >
        <div className={styles.wrapper}>
            <div className={styles.item}>
               <p>{pageContent.section_about_company.main.desc1}</p>
               <br/>
               <p>{pageContent.section_about_company.main.desc2}</p>
               <br/>
               <p>{pageContent.section_about_company.main.desc3}</p>
            </div>
            <div className={styles.item}>
               <p className={styles.underline}>{pageContent.section_about_company.services.title}</p>
               <ul>
                  <li>{pageContent.section_about_company.services.desc1}</li>
                  <li>{pageContent.section_about_company.services.desc2}</li>
                  <li>{pageContent.section_about_company.services.desc3}</li>
                  <li>{pageContent.section_about_company.services.desc4}</li>
                  <li>{pageContent.section_about_company.services.desc5}</li>
                  <li>{pageContent.section_about_company.services.desc6}</li>
                  <li>{pageContent.section_about_company.services.desc7}</li>
                  <li>{pageContent.section_about_company.services.desc8}</li>
                  <li>{pageContent.section_about_company.services.desc9}</li>
                  <li>{pageContent.section_about_company.services.desc10}</li>
                  <li>{pageContent.section_about_company.services.desc11}</li>
               </ul>
            </div>
            <div className={styles.item}>
               <p>{pageContent.section_about_company.ending.title}</p>
               <br/>
               <div className={styles.center}>
                  <p className={styles.italic}>{pageContent.section_about_company.ending.desc1}</p>
                  <p className={styles.italic}>{pageContent.section_about_company.ending.desc2}</p>
               </div>
            </div>
        </div>
      </SectionTemplate>
   );
};

export default SectionAboutCompany;