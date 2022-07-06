import React, {ReactNode} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {Helmet} from "react-helmet-async";

// styles
import styles from "./view.module.scss";

// components
import Footer from "../../components/footer/footer.component";

// interface
interface ITemplateView extends RouteComponentProps<any> {
   viewTitle?: string;
   appVersion: string;
   hasMenu?: boolean;
   has100vh?: boolean;
   children: ReactNode;
}

const TemplateView: React.FC<ITemplateView> = ({
      children,
      viewTitle,
      appVersion,
      hasMenu,
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
               {/*
                  {
                     hasMenu ?
                        <Menu.../>
                     :
                        null
                  }
               */}
               <div className={`${styles.appContent} ${hasMenu && has100vh ? styles.appContentWithMenu100vh : ""}`}>
                  {children}
               </div>
               <Footer/>
            </div>
         }
      </>
   );
};

export default withRouter(TemplateView);