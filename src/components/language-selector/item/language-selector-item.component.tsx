import React from "react";

// styles
import styles from "./language-selector-item.module.scss";

// svgs
import {ReactComponent as SVGFlagPL} from "../../../assets/flags/PL-Flag.svg";
import {ReactComponent as SVGFlagGB} from "../../../assets/flags/GB-Flag.svg";
import {ReactComponent as SVGFlagDE} from "../../../assets/flags/DE-Flag.svg";
import {ReactComponent as SVGFlagUA} from "../../../assets/flags/UA-Flag.svg";

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
            <div className={styles.svgWrap}>
               {
                  countryId === "PL" ?
                     <SVGFlagPL/>
                  : countryId === "GB" ?
                     <SVGFlagGB/>
                  : countryId === "DE" ?
                     <SVGFlagDE/>
                  ://UA
                     <SVGFlagUA/>
               }
            </div>
         </div>
         <div className={`noSelect ${styles.countryShortcutWrap} ${!isSelectedItem ? styles.outerShortcutWrap : ""}`}>
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