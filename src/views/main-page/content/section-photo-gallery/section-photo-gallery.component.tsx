import React from "react";

// styles
import styles from "./section-photo-gallery.module.scss";

// data
import {availablePhotos} from "../../../../data/available-photos/available-photos.data";
import {availableSections} from "../../../../data/available-sections/available-sections";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// modal
import TemplateBasicModal from "../../../../modals/basic-modal/basic-modal.component";

// hooks
import useSectionPhotoGallery from "./section-photo-gallery.hook"

// interfaces
import { IMainPageContent } from "../../../../types/main-page-content.types";

interface ISectionPhotoGallery {
   pageContent: IMainPageContent;
};

const SectionPhotoGallery: React.FC<ISectionPhotoGallery> = ({pageContent}) => {
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
         headerMess={pageContent.section_available_sections[sectionInfo?.file_field_name as keyof typeof pageContent.section_available_sections]}
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
                           alt={pageContent.section_photo_gallery[item.file_photo_name as keyof typeof pageContent.section_photo_gallery]}
                           src={`/images/gallery${item.id}.jpg`}
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
                              pageContent.section_photo_gallery.load_more_images
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
                     alt={pageContent.section_photo_gallery[availablePhotos[currentPhotoIdx].file_photo_name as keyof typeof pageContent.section_photo_gallery]}
                     src={`/images/gallery${availablePhotos[currentPhotoIdx].id}.jpg`}
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