import { useDispatch, useSelector } from "react-redux";
import { SetActiveLanguageIndexInput } from "../Services/State/Slices/InputLanguagesSlice";
import { SetActiveLanguageIndexOutput } from "../Services/State/Slices/OutputLanguagesSlice";

const useLanguageSelected = () => {
  const dispatch = useDispatch();
  const ActiveIndexInput = useSelector(
    (state) => state.PersistedReducer.InputLanguage.ActiveLanguageIndexInput
  );
  const ActiveIndexOutput = useSelector(
    (state) => state.PersistedReducer.Outputlanguage.ActiveLanguageIndexOutput
  );

  const HandleLanguageSelection = (index, lang) => {
    if (
      lang.type === "auto-detect" ||
      lang.type === "input-first-language" ||
      lang.type === "input-second-lnguage"
    ) {
      dispatch(SetActiveLanguageIndexInput(index));
    }
    if (
      lang.type === "output-first-language" ||
      lang.type === "output-second-lnguage"
    ) {
      dispatch(SetActiveLanguageIndexOutput(index));
    }
  };

  const HandleClassName = (langType, index) => {
    const isActiveInput =
      langType === "auto-detect" ||
      langType === "input-first-language" ||
      langType === "input-second-lnguage";

    const isActiveOutput =
      langType === "output-first-language" ||
      langType === "output-second-lnguage";

    const isActive =
      (isActiveInput && index === ActiveIndexInput) ||
      (isActiveOutput && index === ActiveIndexOutput);

    switch (langType) {
      case "auto-detect":
        return isActive
          ? "rounded-tl-2xl border-t border-l border-t-customgreen-500 border-l-customgreen-500"
          : "text-customgray-300";
      case "input-first-language":
      case "input-second-lnguage":
        return isActive
          ? "border-t border-t-customgreen-500 text-customgreen-500"
          : "text-customgray-300";
      case "output-first-language":
        return isActive
          ? "rounded-tl-2xl border-t border-l border-t-customgreen-500 border-l-customgreen-500"
          : "text-customgray-300";
      case "output-second-lnguage":
        return isActive
          ? "border-t border-t-customgreen-500"
          : "text-customgray-300";
      default:
        return "text-customgray-300";
    }
  };

  return { HandleClassName, HandleLanguageSelection };
};

export default useLanguageSelected;
