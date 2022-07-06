import React, {ReactNode} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {Helmet} from "react-helmet-async";

// styles
import styles from "./view.module.scss";

// components
import Footer from "../../components/footer/footer.component";
import AppMenuTemplate from "../app-menu/app-menu.template";
import UserMenu from "../app-menu/user-menu/user-menu.component";

// interface
interface ITemplateView extends RouteComponentProps<any> {
   viewTitle?: string;
   appVersion: string;
   hasNormalMenu?: boolean;
   has100vh?: boolean;
   children: ReactNode;
}

const TemplateView: React.FC<ITemplateView> = ({
      children,
      viewTitle,
      appVersion,
      hasNormalMenu,
      has100vh
  }) => {

   return (
      <>
         <Helmet>
            <title>
               {
                  typeof(viewTitle) !== "undefined" ?
                     viewTitle.length > 0 ?
                        `${viewTitle} - `
                     :
                        ""
                  :
                     ""
               }
               {appVersion}
            </title>
         </Helmet>
         {
            <div className={styles.app}>
               <AppMenuTemplate includesNormalMenu={hasNormalMenu}>
                  <UserMenu includesNormalMenu={hasNormalMenu}/>
               </AppMenuTemplate>
               <div className={`${styles.appContent} ${hasNormalMenu && has100vh ? styles.appContentWithMenu100vh : ""}`}>
                  {children}
               </div>
               <Footer/>
            </div>
         }
      </>
   );
};

export default withRouter(TemplateView);