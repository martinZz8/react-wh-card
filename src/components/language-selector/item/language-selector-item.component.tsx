import React from "react";

// styles
import styles from "./language-selector-item.module.scss";

// svgs
import SVGFlagPL from "../../../assets/flags/PL-Flag.svg";
import SVGFlagGB from "../../../assets/flags/EN-Flag.svg";
import SVGFlagDE from "../../../assets/flags/DE-Flag.svg";
import SVGFlagUA from "../../../assets/flags/UA-Flag.svg";

// interfaces
interface ILanguageSelectorItem {
   countryId: string;
   isSelectedItem?: boolean;
   isOpen?: boolean;
   handleOnClick?: () => void;
   noBorder?: boolean;
}

const LanguageSelectorItem: React.FC<ILanguageSelectorItem> = ({
      countryId,
      isSelectedItem,
      isOpen,
      handleOnClick,
      noBorder
   }) => {

   return (
      <div
         className={`
            ${styles.item}
            ${!isSelectedItem ? styles.notSelectedItem: ""}
            ${noBorder ? styles.noBorder : ""}
         `}
         onClick={() => handleOnClick && handleOnClick()}
      >
         <div className={styles.countryFlagWrap}>
            {
               countryId === "PL" ?
                  <img
                     src={SVGFlagPL}
                     alt="SVGFlagPL"
                  />
               : countryId === "EN" ?
                  <img
                     src={SVGFlagGB}
                     alt="SVGFlagGB"
                  />
               : countryId === "DE" ?
                  <img
                     src={SVGFlagDE}
                     alt="SVGFlagDE"
                  />
               ://UA
                  <img
                     src={SVGFlagUA}
                     alt="SVGFlagUA"
                  />
            }
         </div>
         <div
            className={`
               noSelect
               ${styles.countryShortcutWrap}
               ${!isSelectedItem ? styles.outerShortcutWrap : ""}
            `}
         >
            <p>
               {countryId}
            </p>
         </div>
         {
            isSelectedItem ?
               <div className={styles.arrowWrap}>
                  <i className={`icon-down-open ${isOpen ? styles.isOpen : ""}`}/>
               </div>
            :
               null
         }
      </div>
   );
};

export default LanguageSelectorItem;