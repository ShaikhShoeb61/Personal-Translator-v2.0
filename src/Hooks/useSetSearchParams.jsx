import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setActiveInput } from "../Services/State/Slices/InputLanguagesSlice";
import { setActiveOutput } from "../Services/State/Slices/OutputLanguagesSlice";

const useSetSearchParams = () => {
  const dispatch = useDispatch();
  const inputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.inputDropdownActive
  );
  const inputText = useSelector(
    (state) => state.PersistedReducer.inputLanguage.inputText
  );
  const sourceLangauge = useSelector(
    (state) => state.PersistedReducer.inputLanguage.activeInput
  );
  const targetLangauge = useSelector(
    (state) => state.PersistedReducer.outputLanguage.activeOutput
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const param = new URLSearchParams(searchParams);

  useEffect(() => {
    const param = new URLSearchParams(searchParams);
    param.set("sl", sourceLangauge);
    param.set("tl", targetLangauge);
    param.set("text", inputText);
    setSearchParams(`?${param.toString()}`);
  }, [targetLangauge, sourceLangauge, inputText, setSearchParams]);

  const setParams = (key, value) => {
    if (key === "tl" || key === "sl") {
      param.set(key, value);
    } else {
      param.set(key, value);
    }

    return `?${param.toString()}`;
  };

  const updateParams = (code) => {
    if (inputDropdownActive) {
      param.set("sl", code);
      dispatch(setActiveInput(code));
    } else if (code) {
      param.set("tl", code);
      dispatch(setActiveOutput(code));
    }

    setSearchParams(`?${param.toString()}`);
  };

  return { setParams, updateParams };
};

export default useSetSearchParams;
