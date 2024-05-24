import React, {useContext} from 'react';

// context
import {LayoutColorContext} from "../../providers/layout-color/layout-color-provider.component";

// components
import StandardApp from "./routes/StandardApp.component";

// hooks
import useRoot from "./useRoot";

function Root() {
   const {selectedLanguage} = useRoot();
   const {layoutColor} = useContext(LayoutColorContext);

   return (
    <div
      style={{
         width: "100%"
      }}
      className={`
         basicColors
         ${layoutColor === "dark" ? "darkTheme" : "lightTheme"}
      `}
    >
      <StandardApp />
    </div>
   );
}

export default Root;
