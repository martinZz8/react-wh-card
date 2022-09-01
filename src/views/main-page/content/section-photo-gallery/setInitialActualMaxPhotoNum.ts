import {availablePhotos} from "../../../../data/available-photos/available-photos.data";

export const setInitialActualMaxPhotoNum = (): number => {
   const min_items = 4;
   return availablePhotos.length > min_items ? min_items : availablePhotos.length;
};