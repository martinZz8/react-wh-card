import React, {useContext, useEffect, useState} from "react";

// styles
import styles from "./ua-help-info.module.scss";

// SVGs
import SVGUaHeartFlag from "../../assets/other/heart-shaped-ukrainian-flag.svg";

// context
import {WindowContext} from "../../providers/window-size/window-size-provider.component";

// interfaces
import { IMainPageContent } from "../../types/main-page-content.types";

interface IUaHelpInfo {
  smallFont?: boolean;
  pageContent: IMainPageContent;
}

const UaHelpInfo: React.FC<IUaHelpInfo> = ({smallFont, pageContent}) => {
  const determineIfIsShortText = (): boolean => windowWidth > 420;

  const {windowWidth} = useContext(WindowContext);
  const [isShortText, setIsShortText] = useState<boolean>(determineIfIsShortText());

  useEffect(() => {
    setIsShortText(determineIfIsShortText());
  }, [windowWidth]);

  return (
    <div className={`${styles.uaHelpInfo} ${smallFont ? styles.smallFont : ""}`}>
      <img
        src={SVGUaHeartFlag}
        alt="SVGUaHeartFlag"
      />
      <p>
        {
          isShortText ?
            pageContent.section_ua_help.ua_help_info_short
          :
            pageContent.section_ua_help.ua_help_info_long
        }
      </p>
      <a
        href={import.meta.env.VITE_UA_FUNDRAISE_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </a>
    </div>
  );
};

export default UaHelpInfo;