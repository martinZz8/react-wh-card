import React from 'react';

// importing fontello
import "../../assets/fontello/css/fontello.css";

// components
import StandardApp from "./routes/StandardApp.component";

// hooks
import useRoot from "./useRoot";

function Root() {
   const {appVersion} = useRoot();

   return (
    <>
      <StandardApp appVersion={appVersion} />
    </>
   );
}

export default Root;
