import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  setTranslatedText,
  setNewPanelTranslatedText,
} from "../Services/State/Slices/OutputLanguagesSlice";
import { useTranslateTextMutation } from "../Services/Api/TranslationApi";
import useDebounce from "./useDebounce";
import { useAutoDetectLanguageMutation } from "../Services/Api/LanguagesListApi";

const useTranslation = () => {
  const dispatch = useDispatch();
  const [
    translateText,
    { isLoading: translateLoading, isError: translateError },
  ] = useTranslateTextMutation();
  const [detectLanguage, { isLoading: detectLoading, isError: detectError }] =
    useAutoDetectLanguageMutation();

  const { newPanel } = useSelector(
    (state) => state.PersistedReducer.outputLanguage
  );
  const [searchParams] = useSearchParams();
  const param = new URLSearchParams(searchParams);
  const sourceLanguage = param.get("sl");
  const targetLanguage = param.get("tl");
  const anotherTargetLanguage = param.get("atl");
  const text = param.get("text");

  const debouncedText = useDebounce(text);
  const [detectedLanguage, setDetectedLanguage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedText) {
        dispatch(setTranslatedText(""));
        dispatch(setNewPanelTranslatedText(""));
        return;
      }

      try {
        const translationData = await translateText({
          sourceLanguage: sourceLanguage || detectedLanguage,
          targetLanguage,
          text: debouncedText,
        });

        if (sourceLanguage === "auto") {
          dispatch(setTranslatedText(translationData?.data?.translatedText[0]));
        } else {
          dispatch(setTranslatedText(translationData?.data?.translatedText));
        }

        if (newPanel) {
          const translationDataNewPanel = await translateText({
            sourceLanguage: sourceLanguage || detectedLanguage,
            targetLanguage: anotherTargetLanguage,
            text: debouncedText,
          });

          if (sourceLanguage === "auto") {
            dispatch(
              setNewPanelTranslatedText(
                translationDataNewPanel?.data?.translatedText[0]
              )
            );
          } else {
            dispatch(
              setNewPanelTranslatedText(
                translationDataNewPanel?.data?.translatedText
              )
            );
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const detectText = async () => {
      if (!debouncedText) {
        return;
      }

      if (sourceLanguage === "auto") {
        try {
          const result = await detectLanguage(debouncedText);
          setDetectedLanguage(result?.data?.lang);
        } catch (error) {
          console.error("Error detecting language:", error);
        }
      }
    };

    detectText();
  }, [
    debouncedText,
    sourceLanguage,
    targetLanguage,
    dispatch,
    anotherTargetLanguage,
    newPanel,
  ]);

  return { translateLoading, translateError, detectLoading, detectError };
};

export default useTranslation;
