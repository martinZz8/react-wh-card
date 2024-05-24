// interfaces
import {IDayOfWeek} from "./section-additional-info.types";

export const dayOfWeeks: IDayOfWeek[] = [
   {
      id: 1,
      file_day_name: "monday",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 2,
      file_day_name: "tuesday",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 3,
      file_day_name: "wednesday",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 4,
      file_day_name: "thursday",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 5,
      file_day_name: "friday",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 6,
      file_day_name: "saturday",
      hourFrom: null,
      hourTo: null,
      isAWorkDay: false
   },
   {
      id: 0,
      file_day_name: "sunday",
      hourFrom: null,
      hourTo: null,
      isAWorkDay: false
   }
];