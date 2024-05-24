import React from "react";

// styles
import styles from "./main-page.module.scss";

// templates
import TemplateView from "../../templates/view/view.template";

// hooks
import usePageContent from "../../hooks/usePageContent.hook";

// components
import MainPageContent from "./content/main-page-content.component";

import { IMainPageContent } from "../../types/main-page-content.types";
import { AvailablePagesEnum } from "../../enums/available-pages.enums";

const ViewMainPage: React.FC = () => {
   const {pageContent} = usePageContent<IMainPageContent>(AvailablePagesEnum.Main);

   return (
      pageContent != null ?
         <TemplateView appVersion={pageContent.app_version.title} viewTitle="">
            <MainPageContent pageContent={pageContent}/>
         </TemplateView>
      :
         null
   );
};

export default ViewMainPage;