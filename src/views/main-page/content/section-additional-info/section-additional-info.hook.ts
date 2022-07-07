import {useState, useEffect} from "react";

// data
import {dayOfWeeks} from "./section-additional-info.data";

const useAdditionalInfo = () => {
   const [todayDayNumber, setTodayDayNumber] = useState<number>(-1);

   useEffect(() => {
      const d = new Date();
      setTodayDayNumber(d.getDay());//number from 0 to 6 - corresponding day
   },[]);

   const checkIfIsOpened = (): boolean => {
      if (todayDayNumber >= 5 && todayDayNumber <= 6) { //saturdays and sundays are free of work
         return false;
      }

      const todayWorkPlan = dayOfWeeks.find(item => item.id === todayDayNumber);
      if (todayWorkPlan !== undefined) {
         let splittedHourFrom = todayWorkPlan.hourFrom?.split(":");
         // @ts-ignore
         let fromH = parseInt(splittedHourFrom[0]);
         // @ts-ignore
         let fromM = parseInt(splittedHourFrom[1]);

         let splittedHourTo = todayWorkPlan.hourTo?.split(":");
         // @ts-ignore
         let toH = parseInt(splittedHourTo[0]);
         // @ts-ignore
         let toM = parseInt(splittedHourTo[1]);

         //console.log(fromH, fromM, toH, toM);

         let date = new Date();
         let nowHour = date.getHours();
         let nowMinutes = date.getMinutes();

         if (nowHour >= fromH && nowHour <= toH) {
            if (nowHour === toH) {
               if (nowMinutes < toM) {
                  return true;
               }
               else {
                  return false;
               }
            }
            else {
               return true;
            }
         }
         else {
            return false;
         }
      }

      return false;
   };

   return {todayDayNumber, checkIfIsOpened};
};

export default useAdditionalInfo;