import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './views/root/Root';
import reportWebVitals from './reportWebVitals';

// styles
import "./styles/root.scss";
import "./styles/theme-colors.scss";

// importing fontello
import "./assets/fontello/css/fontello.css";

// router
import {BrowserRouter as Router} from "react-router-dom";

// helmet provider
import {HelmetProvider} from "react-helmet-async";

// providers
import WindowSizeProvider from "./providers/window-size/window-size-provider.component";
import CurrentLanguageProvider from "./providers/current-language/current-language-provider.component";
import LayoutColorProvider from "./providers/layout-color/layout-color-provider.component";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <HelmetProvider>
         <WindowSizeProvider>
            <CurrentLanguageProvider>
              <LayoutColorProvider>
                <Router>
                  <Root />
                </Router>
              </LayoutColorProvider>
            </CurrentLanguageProvider>
         </WindowSizeProvider>
      </HelmetProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
