import { useDispatch, useSelector } from "react-redux";
import { setActiveInput } from "../Services/State/Slices/InputLanguagesSlice";
import { setActiveOutput } from "../Services/State/Slices/OutputLanguagesSlice";
import { setSourceLanguage } from "../Services/State/Slices/InputLanguagesSlice";
import { setTargetLanguage } from "../Services/State/Slices/OutputLanguagesSlice";
import { setInputText } from "../Services/State/Slices/InputLanguagesSlice";
import { setNewPanelTargetLanguage } from "../Services/State/Slices/OutputLanguagesSlice";
import { setTranslatedText } from "../Services/State/Slices/OutputLanguagesSlice";
import { setActiveNewPanel } from "../Services/State/Slices/OutputLanguagesSlice";
import { setNewPanelTranslatedText } from "../Services/State/Slices/OutputLanguagesSlice";

const useLanguageSwipe = () => {
  const sourceLangauge = useSelector(
    (state) => state.PersistedReducer.inputLanguage.sourceLanguage
  );
  const targetLangauge = useSelector(
    (state) => state.PersistedReducer.outputLanguage.targetLanguage
  );
  const newPanelTargetLanguage = useSelector(
    (state) => state.PersistedReducer.outputLanguage.newPanelTargetLanguage
  );
  const newPanelTranslatedText = useSelector(
    (state) => state.PersistedReducer.outputLanguage.newPanelTranslatedText
  );
  const inputText = useSelector(
    (state) => state.PersistedReducer.inputLanguage.inputText
  );

  const translatedText = useSelector(
    (state) => state.PersistedReducer.outputLanguage.translatedText
  );

  const dispatch = useDispatch();

  const handleSwipeLanguage = () => {
    dispatch(
      setSourceLanguage({
        name: targetLangauge.name,
        code: targetLangauge.code,
      })
    );
    dispatch(
      setTargetLanguage({
        name: sourceLangauge.name,
        code: sourceLangauge.code,
      })
    );
    dispatch(setActiveInput(targetLangauge.code));
    dispatch(setActiveOutput(sourceLangauge.code));
    dispatch(setInputText(translatedText));
    dispatch(setTranslatedText(inputText));
  };

  const handleSwipeLanguageNewPanel = () => {
    dispatch(
      setSourceLanguage({
        name: newPanelTargetLanguage.name,
        code: newPanelTargetLanguage.code,
      })
    );
    dispatch(
      setNewPanelTargetLanguage({
        name: sourceLangauge.name,
        code: sourceLangauge.code,
      })
    );
    dispatch(setActiveInput(newPanelTargetLanguage.code));
    dispatch(setActiveNewPanel(sourceLangauge.code));
    dispatch(setInputText(newPanelTranslatedText));
    dispatch(setNewPanelTranslatedText(inputText));
  };

  return { handleSwipeLanguage, handleSwipeLanguageNewPanel };
};

export default useLanguageSwipe;
