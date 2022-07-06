import React from "react";

// styles
import styles from "./main-page.module.scss";

// templates
import TemplateView from "../../templates/view/view.template";

// components
import MainPageContent from "./content/main-page-content.component";

// interfaces
interface IViewMainPage {
   appVersion: string;
}

const ViewMainPage: React.FC<IViewMainPage> = ({appVersion}) => {

   return (
      <TemplateView appVersion={appVersion} viewTitle="">
         <MainPageContent/>
      </TemplateView>
   );
};

export default ViewMainPage;