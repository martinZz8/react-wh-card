import {useState} from "react";

// This component works good with 'onMouseEnter -> makeVisible()' and 'onMouseLeave -> makeHidden()'
const useSmoothShow = (initialVisible: boolean, initialAnimation: boolean, decayTimeMs: number) => {
   const [isVisible, setIsVisible] = useState<boolean>(initialVisible);
   const [isAnimation, setIsAnimation] = useState<boolean>(initialAnimation);
   const [timerIds, setTimerIds] = useState<NodeJS.Timeout[]>([]);

   const makeVisible = () => {
      for (let id of timerIds) {
         clearTimeout(id);
      }
      setTimerIds([]);

      setIsVisible(true);
      setIsAnimation(true);
   };

   const makeHidden = () => {
      setIsAnimation(false);

      let id = setTimeout(() => {
         setIsVisible(false);
      }, decayTimeMs);

      setTimerIds(prev => [
         ...prev,
         id
      ]);
   };

   return {isVisible, isAnimation, makeVisible, makeHidden};
};

export default useSmoothShow;