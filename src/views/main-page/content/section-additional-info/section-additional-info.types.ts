export interface IDayOfWeek {
   id: number;
   PLName: string;
   GBName: string;
   DEName: string;
   UAName: string;
   hourFrom: string | null;
   hourTo: string | null;
   isAWorkDay: boolean;
}