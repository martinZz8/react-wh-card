import React, {useContext} from "react";

// styles
import styles from "./section-photo-gallery.module.scss";

// data
import {availablePhotos} from "../../../../data/available-photos/available-photos.data";
import {availableSections} from "../../../../data/available-sections/available-sections";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language/current-language-provider.component";

// modal
import TemplateBasicModal from "../../../../modals/basic-modal/basic-modal.component";

// hooks
import useSectionPhotoGallery from "./section-photo-gallery.hook"

const SectionPhotoGallery: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const sectionInfo = availableSections.find(item => item.sectionId === "section-photo-gallery");
   const {
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
   } = useSectionPhotoGallery();

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={
            selectedLanguage === "PL" ?
               sectionInfo?.PLName
            : selectedLanguage === "EN" ?
               sectionInfo?.GBName
            : selectedLanguage === "DE" ?
               sectionInfo?.DEName
            ://UA
               sectionInfo?.UAName
         }
         iconName={"icon-picture"}
      >
         <div className={styles.wrapper}>
            <div className={styles.thumbnailsContainer}>
               {
                  availablePhotos.slice(0, actualMaxPhotoNum).map(item => (
                     <div
                        key={item.id}
                        className={styles.thumbnail}
                        onClick={() => onThumbnailClick(item.id-1)}
                     >
                        <img
                           alt={
                              selectedLanguage === "PL" ?
                                 item.altPL
                              : selectedLanguage === "EN" ?
                                 item.altGB
                              : selectedLanguage === "DE" ?
                                 item.altDE
                              ://UA
                                 item.altUA
                           }
                           src={`${process.env.PUBLIC_URL}/images/gallery${item.id}.jpg`}
                        />
                        <div className={styles.hoverFilter}>
                           <i className={"icon-resize-full-alt"}/>
                        </div>
                     </div>
                  ))
               }
               {
                  actualMaxPhotoNum < availablePhotos.length ?
                     <div
                        className={`noSelect ${styles.thumbnail} ${styles.showMoreThumbnailsItem}`}
                        onClick={revealAllThumbnails}
                     >
                        <p>
                           {
                              selectedLanguage === "PL" ?
                                 "Załaduj więcej zdjęć"
                              : selectedLanguage === "EN" ?
                                 "Load more images"
                              : selectedLanguage === "DE" ?
                                 "Weitere Bilder laden"
                              ://UA
                                 "Завантажити більше зображень"
                           }
                        </p>
                        <i className={"icon-picture"}/>
                     </div>
                  :
                     null
               }
            </div>
         </div>
         {/*Full screen modal*/}
         <TemplateBasicModal
            isOpened={isFullScreen}
         >
            <div
               className={styles.fullScreenModal}
               tabIndex={0}
               onKeyDown={e => {
                  if (!isKeyBlocked) {
                     if (e.key === "ArrowLeft") {
                        onPrevClick();
                        setIsKeyBlocked(true);
                     }
                     else if (e.key === "ArrowRight") {
                        onNextClick();
                        setIsKeyBlocked(true);
                     }
                  }

                  // Close modal on escape click
                  if (e.key === "Escape") {
                     setIsFullScreen(false);
                  }
               }}
               onKeyUp={e => {
                  if (isKeyBlocked) {
                     if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                        setIsKeyBlocked(false);
                     }
                  }
               }}
            >
               <div
                  className={styles.arrowWrap}
                  onClick={onPrevClick}
               >
                  <i className={"icon-left-open"}/>
               </div>
               <div className={styles.imageContent}>
                  <img
                     alt={
                        selectedLanguage === "PL" ?
                           availablePhotos[currentPhotoIdx].altPL
                        : selectedLanguage === "EN" ?
                           availablePhotos[currentPhotoIdx].altGB
                        : selectedLanguage === "DE" ?
                           availablePhotos[currentPhotoIdx].altDE
                        ://UA
                           availablePhotos[currentPhotoIdx].altUA
                     }
                     src={`${process.env.PUBLIC_URL}/images/gallery${availablePhotos[currentPhotoIdx].id}.jpg`}
                  />
               </div>
               <div
                  className={styles.arrowWrap}
                  onClick={onNextClick}
               >
                  <i className={"icon-right-open"}/>
               </div>
               {/*Close button*/}
               <div
                  className={styles.closeButtonWrap}
                  onClick={() => setIsFullScreen(false)}
               >
                  <i className={"icon-cancel"}/>
               </div>
            </div>
         </TemplateBasicModal>
      </SectionTemplate>
   );
};

export default SectionPhotoGallery;