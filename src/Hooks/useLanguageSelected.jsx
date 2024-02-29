import { useState } from "react";

const useLanguageSelected = () => {
  const [active, setActive] = useState();

  const HandleLanguageSelection = (index) => {
    setActive(index);
  };

  const HandleClassName = (langType, index) => {
    switch (langType) {
      case "auto-detect":
        return index === active
          ? "rounded-tl-2xl border-t border-l border-t-customgreen-500 border-l-customgreen-500"
          : "text-customgray-300";
      case "input-first-language":
      case "input-second-lnguage":
        return index === active
          ? "border-t border-t-customgreen-500 text-customgreen-500"
          : "text-customgray-300";
      case "output-first-language":
        return index === active
          ? "rounded-tl-2xl border-t border-l border-t-customgreen-500 border-l-customgreen-500"
          : "text-customgray-300";
      case "output-second-lnguage":
        return index === active
          ? "border-t border-t-customgreen-500"
          : "text-customgray-300";
      default:
        return "text-customgray-300";
    }
  };

  return { HandleClassName, HandleLanguageSelection, active };
};

export default useLanguageSelected;
