import React, {useContext} from "react";

// styles
import styles from "./ua-help-info.module.scss";

// SVGs
import {ReactComponent as SVGUaHeartFlag} from "../../assets/other/heart-shaped-ukrainian-flag.svg";

// context
import {CurrentLanguageContext} from "../../providers/current-language/current-language-provider.component";

// interfaces
interface IUaHelpInfo {
  smallFont?: boolean;
}

const UaHelpInfo: React.FC<IUaHelpInfo> = ({smallFont}) => {
  const {selectedLanguage} = useContext(CurrentLanguageContext);

  return (
    <div className={`${styles.uaHelpInfo} ${smallFont ? styles.smallFont : ""}`}>
      <div className={styles.svgWrap}>
        <SVGUaHeartFlag/>
      </div>
      <p>
        {
          selectedLanguage === "PL" ?
            "Zbiórka pieniędzy dla Ukrainy: "
          : selectedLanguage === "GB" ?
            "Fundraising for Ukraine: "
          : selectedLanguage === "DE" ?
            "Fundraising für die Ukraine"
          ://UA
            "Збір коштів для України"
        }
      </p>
      <a
        href={process.env.REACT_APP_UA_FUNDRAISE_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </a>
    </div>
  );
};

export default UaHelpInfo;