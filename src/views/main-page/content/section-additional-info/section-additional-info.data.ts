// interfaces
import {IDayOfWeek} from "./section-additional-info.types";

export const dayOfWeeks: IDayOfWeek[] = [
   {
      id: 1,
      PLName: "pon.",
      GBName: "Mo.",
      DEName: "Mo.",
      UAName: "Пн.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 2,
      PLName: "wt.",
      GBName: "Tu.",
      DEName: "Di.",
      UAName: "Вт.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 3,
      PLName: "śr.",
      GBName: "We.",
      DEName: "Mi.",
      UAName: "Ср.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 4,
      PLName: "czw.",
      GBName: "Th.",
      DEName: "Do.",
      UAName: "Чт.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 5,
      PLName: "pt.",
      GBName: "Fr.",
      DEName: "Fr.",
      UAName: "Пт.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 6,
      PLName: "sob.",
      GBName: "Sa.",
      DEName: "Sa.",
      UAName: "Сб.",
      hourFrom: null,
      hourTo: null,
      isAWorkDay: false
   },
   {
      id: 0,
      PLName: "niedz.",
      GBName: "Su.",
      DEName: "So.",
      UAName: "Нд.",
      hourFrom: null,
      hourTo: null,
      isAWorkDay: false
   }
];