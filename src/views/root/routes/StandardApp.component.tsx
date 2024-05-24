import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// views
import ViewMainPage from "../../main-page/main-page.component";

const StandardApp: React.FC = () => {

   return (
     <Switch>
       {/*Main page*/}
       <Route
          exact
          path="/"
          component={() => (
                <ViewMainPage />
             )
          }
       />
       {/*Other routes*/}
       <Route
          exact
          path="*"
          component={() =>
             <Redirect to={"/"}/>
          }
       />
    </Switch>
   );
};

export default StandardApp;