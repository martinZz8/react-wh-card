import {useState} from "react";

// data
import {availablePhotos} from "../../../../data/available-photos/available-photos.data";

// functions
import {setInitialActualMaxPhotoNum} from "./setInitialActualMaxPhotoNum";

const useSectionPhotoGallery = () => {
   const [actualMaxPhotoNum, setActualMaxPhotoNum] = useState<number>(setInitialActualMaxPhotoNum());
   const [currentPhotoIdx, setCurrentPhotoIdx] = useState<number>(0);
   const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
   const [isKeyBlocked, setIsKeyBlocked] = useState<boolean>(false);

   const onThumbnailClick = (thumbIdx: number) => {
      setCurrentPhotoIdx(thumbIdx);
      setIsFullScreen(true);
   };

   const onNextClick = () => {
      setCurrentPhotoIdx(prev => (prev+1)%availablePhotos.length);
   };

   const onPrevClick = () => {
      setCurrentPhotoIdx(prev => {
         let valToSet = prev-1;
         if (valToSet < 0) {
            valToSet = availablePhotos.length-1;
         }

         return valToSet;
      });
   };

   const revealAllThumbnails = () => {
     setActualMaxPhotoNum(availablePhotos.length);
   };

   return {
      actualMaxPhotoNum,
      currentPhotoIdx,
      isFullScreen,
      setIsFullScreen,
      onThumbnailClick,
      onNextClick,
      onPrevClick,
      revealAllThumbnails,
      isKeyBlocked,
      setIsKeyBlocked
   };
};

export default useSectionPhotoGallery;