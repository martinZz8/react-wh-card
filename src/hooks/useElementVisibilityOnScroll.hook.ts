import {useState, useEffect, useRef} from "react";

// functions
import { getCurrentPageScrollTopPosition } from "../functions/get-current-page-scroll-top-position";

const useElementVisibilityOnScroll = (alwaysVisibleBelowScrollPx: number | null = null) => {
   const [isVisible, setIsVisible] = useState<boolean>(true);

   // Getting ref with "getCurrentPageScrollTopPosition()" initial value and creating own "setPreviousScrollPosition" function ...
   // ... to properly get "previousScrollPosition" value in "handleScroll" function passed to "window.addEventListener" function
   // from: https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
   const previousScrollPositionRef = useRef(getCurrentPageScrollTopPosition());
   const setPreviousScrollPosition = (data: number) => {
      previousScrollPositionRef.current = data;
   };

   useEffect(() => {
      // Note: We cannot read standard state of previous scroll position inside the "handleScroll" function, because it's registered using "document.addEventListener".
      // We need mutable state (to be read in scope of this listener), so we use "useRef" hook as "previousScrollPositionRef" to achieve this.
      const handleScroll = () => {
         let visibleToSet: boolean = false;
         const currentScrollPosition = getCurrentPageScrollTopPosition();
         
         if ((alwaysVisibleBelowScrollPx !== null && currentScrollPosition <= alwaysVisibleBelowScrollPx)
            || (previousScrollPositionRef.current !== null && currentScrollPosition < previousScrollPositionRef.current)) {
            visibleToSet = true;
         }
         
         setPreviousScrollPosition(currentScrollPosition);
         setIsVisible(visibleToSet);        
      }

      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };      
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return {isVisible};
};
export default useElementVisibilityOnScroll;