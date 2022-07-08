export type IAvailableSectionsId =
   "none" |
   "section-about-company" |
   "section-additional-info" |
   "section-location" |
   "section-mail" |
   "section-photo-gallery";

export interface IAvailableSection {
   sectionId: IAvailableSectionsId;
   PLName: string;
   GBName: string;
   DEName: string;
   UAName: string;
}