export interface IDayOfWeek {
   id: number;
   file_day_name: string;
   hourFrom: string | null;
   hourTo: string | null;
   isAWorkDay: boolean;
}