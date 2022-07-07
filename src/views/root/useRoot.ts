import {useEffect} from "react";

const useRoot = () => {

   useEffect(() => {
      const getAllAnchors = () => {
         return document.querySelectorAll('a[href^="#"]');
      };

      const handleClick = (anchor: Element, e: Event) => {
         e.preventDefault();

         const attribute = anchor.getAttribute("href");
         if (attribute) {
            let elements = document.querySelectorAll(attribute);
            elements.forEach(elem => {
               elem.scrollIntoView({
                  behavior: "smooth"
               });
            })
         }
      };

      getAllAnchors().forEach(anchor => {
         anchor.addEventListener("click",  (e) => handleClick(anchor, e));
      });

      return () => {
         getAllAnchors().forEach(anchor => {
            anchor.removeEventListener("click", (e) => handleClick(anchor, e));
         });
      };
   }, []);

   return {};
};

export default useRoot;