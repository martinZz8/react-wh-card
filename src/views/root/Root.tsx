import React from 'react';

// importing fontello
import "../../assets/fontello/css/fontello.css";

// components
import StandardApp from "./routes/StandardApp.component";

const appVersion = "Biuro rachnukowe Wiesław Harbuz";

function Root() {
  return (
    <>
      <StandardApp appVersion={appVersion} />
    </>
  );
}

export default Root;
