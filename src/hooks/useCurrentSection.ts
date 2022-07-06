import {useState, useEffect} from "react";

// data
import {availableSections} from "../data/available-sections/available-sections";

// functions
import {getSectionsArray} from "../functions/getSectionsArray";

// interfaces
import {IAvailableSectionsId} from "../data/available-sections/available-sections.types";

const useCurrentSection = () => {
   const [currentSection, setCurrentSection] = useState<IAvailableSectionsId>("none");

   useEffect(() => {
      let handleScroll = () => {
         console.log("Handle scroll works!");
         let reversedSections = getSectionsArray().reverse();
         let reversedAvailableSections = availableSections.reverse();

         for (let i = 0; i < reversedSections.length; i++) {
            let section = reversedSections[i];

            if (section.getBoundingClientRect().top <= 20) {
               setCurrentSection(reversedAvailableSections[i].sectionId);
               break; //this break is necessary
            }
         }
      };

      document.addEventListener("scroll", handleScroll);

      return () => {
         document.removeEventListener("scroll", handleScroll);
      }
   }, []);

   return {currentSection};
};

export default useCurrentSection;