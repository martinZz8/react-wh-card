import React, {useContext} from "react";

// styles
import styles from "./ua-help-info.module.scss";

// SVGs
import {ReactComponent as SVGUaHeartFlag} from "../../assets/other/heart-shaped-ukrainian-flag.svg";

// context
import {CurrentLanguageContext} from "../../providers/current-language/current-language-provider.component";
import {WindowContext} from "../../providers/window-size/window-size-provider.component";

// interfaces
interface IUaHelpInfo {
  smallFont?: boolean;
}

const UaHelpInfo: React.FC<IUaHelpInfo> = ({smallFont}) => {
  const {selectedLanguage} = useContext(CurrentLanguageContext);
  const {windowWidth} = useContext(WindowContext);

  const isShortText = () => {
    return windowWidth > 420;
  };

  return (
    <div className={`${styles.uaHelpInfo} ${smallFont ? styles.smallFont : ""}`}>
      <div className={styles.svgWrap}>
        <SVGUaHeartFlag/>
      </div>
      <p>
        {
          selectedLanguage === "PL" ?
            isShortText() ?
              "Zbiórka pieniędzy dla Ukrainy: "
            :
              "Zbiórka dla Ukrainy: "
          : selectedLanguage === "EN" ?
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