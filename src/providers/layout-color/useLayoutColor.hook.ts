import { useState } from "react";

// functions
const isProperColor = (color: string) => {
  return (color === "dark" || color === "light");
};

// constants
const lsName = "layout-color";

const useLayoutColor = () => {
  // Function to set property in html
  const setHtmlColorScheme = (color: string) => {
	const d = document.querySelector("html");
	if (d) {
		d.style.colorScheme = color;
	}
  };

  // Initial color function
  const getInitialLayoutColor = () => {
    let colorToRet = "dark";
	const colorFromLS = window.localStorage.getItem(lsName);

	if (colorFromLS && isProperColor(colorFromLS)) {
		colorToRet = colorFromLS;
	}
	else {
		window.localStorage.setItem(lsName, colorToRet);
	}
  	setHtmlColorScheme(colorToRet);

	return colorToRet;
  };

  const [layoutColor, setLayoutColor] = useState<string>(getInitialLayoutColor());

  const setProperLayoutColor = (colorToSet: string) => {
	if (isProperColor(colorToSet)) {
		setLayoutColor(colorToSet);
		window.localStorage.setItem(lsName, colorToSet);
		setHtmlColorScheme(colorToSet);
	}
  };
  
  return {layoutColor, setProperLayoutColor};
};

export default useLayoutColor;
