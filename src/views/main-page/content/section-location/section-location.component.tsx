import React, {useContext} from "react";

// styles
import styles from "./section-location.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language/current-language-provider.component";

const SectionLocation: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const sectionInfo = availableSections.find(item => item.sectionId === "section-location");

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={
            selectedLanguage === "PL" ?
               sectionInfo?.PLName
            : selectedLanguage === "EN" ?
               sectionInfo?.ENName
            : selectedLanguage === "DE" ?
               sectionInfo?.DEName
            ://UA
               sectionInfo?.UAName
         }
         iconName={"icon-map"}
      >
         <div className={styles.wrapper}>
            <div className={styles.map}>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.255780439709!2d23.420761015014268!3d50.43633619626388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724af0256e1cbe3%3A0x3d389e28bab9f519!2sBiuro%20Rachunkowe%20Wies%C5%82aw%20Harbuz!5e0!3m2!1spl!2spl!4v1657203959498!5m2!1spl!2spl"
                  title="google-maps-addon"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{border: "1px solid black"}}
               />
            </div>
         </div>
      </SectionTemplate>
   );
};

export default SectionLocation;