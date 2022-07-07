// data
import {availableSections} from "../data/available-sections/available-sections";

export const getSectionsArray = (): HTMLElement[] => {
   let arrToRet: HTMLElement[] = [];
   for (let section of availableSections) {
      const elem = document.getElementById(section.sectionId);
      if (elem !== null) {
         arrToRet.push(elem);
      }
   }

   return arrToRet;
};