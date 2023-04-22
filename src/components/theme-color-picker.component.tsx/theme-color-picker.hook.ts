import {useContext} from "react";

// context
import {LayoutColorContext} from "../../providers/layout-color/layout-color-provider.component";

const useThemeColorPicker = () => {
  const {layoutColor, setProperLayoutColor} = useContext(LayoutColorContext);

  const swapLayoutColor = () => {
    let layoutColorToSet = "dark";
    if (layoutColor === "dark") {
      layoutColorToSet = "light";
    }

    setProperLayoutColor(layoutColorToSet);
  };

  return {
    layoutColor,
    swapLayoutColor
  };
};

export default useThemeColorPicker;