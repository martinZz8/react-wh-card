import React from 'react';

// importing fontello
import "../../assets/fontello/css/fontello.css";

// components
import StandardApp from "./routes/StandardApp.component";

// hooks
import useRoot from "./useRoot";

const appVersion = "Biuro rachnukowe Wiesław Harbuz";

function Root() {
   useRoot();

   return (
    <>
      <StandardApp appVersion={appVersion} />
    </>
   );
}

export default Root;
