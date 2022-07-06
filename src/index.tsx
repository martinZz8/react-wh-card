import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './views/root/Root';
import reportWebVitals from './reportWebVitals';

// styles
import './styles/root.scss';

// router
import {BrowserRouter as Router} from "react-router-dom";

// helmet provider
import {HelmetProvider} from "react-helmet-async";

// window size provider
import WindowSizeProvider from "./providers/window-size-provider.component";
import CurrentLanguageProvider from "./providers/current-language-provider.component";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <HelmetProvider>
         <WindowSizeProvider>
            <CurrentLanguageProvider>
               <Router>
                  <Root />
               </Router>
            </CurrentLanguageProvider>
         </WindowSizeProvider>
      </HelmetProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
