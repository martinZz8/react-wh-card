export type IAvailableSectionsId =
   "none" |
   "section-about-company" |
   "section-additional-info" |
   "section-location" |
   "section-mail" |
   "section-photo-gallery";

export interface IAvailableSection {
   sectionId: IAvailableSectionsId;
   file_field_name: string;
}