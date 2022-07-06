export type IAvailableSectionsId = "none" | "section-about-company" | "section-additional-info" | "section-map" | "section-mail" | "section-photo-gallery";

export interface IAvailableSection {
   sectionId: IAvailableSectionsId;
   PLName: string;
   GBName: string;
   DEName: string;
}