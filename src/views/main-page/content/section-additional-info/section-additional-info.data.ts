// interfaces
import {IDayOfWeek} from "./section-additional-info.types";

export const dayOfWeeks: IDayOfWeek[] = [
   {
      id: 0,
      PLName: "pon.",
      GBName: "Mo.",
      DEName: "Mo.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 1,
      PLName: "wt.",
      GBName: "Tu.",
      DEName: "Di.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 2,
      PLName: "śr.",
      GBName: "We.",
      DEName: "Mi.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 3,
      PLName: "czw.",
      GBName: "Th.",
      DEName: "Do.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 4,
      PLName: "pt.",
      GBName: "Fr.",
      DEName: "Fr.",
      hourFrom: "08:00",
      hourTo: "16:00",
      isAWorkDay: true
   },
   {
      id: 5,
      PLName: "sob.",
      GBName: "Sa.",
      DEName: "Sa.",
      hourFrom: null,
      hourTo: null,
      isAWorkDay: false
   },
   {
      id: 6,
      PLName: "niedz.",
      GBName: "Su.",
      DEName: "So.",
      hourFrom: null,
      hourTo: null,
      isAWorkDay: false
   }
];