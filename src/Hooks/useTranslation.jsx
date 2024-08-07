import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  setTranslatedText,
  setNewPanelTranslatedText,
} from "../Services/State/Slices/OutputLanguagesSlice";
import { useTranslateTextMutation, useAutoDetectLanguageMutation } from "../Services/Api/TranslationApi";
import useDebounce from "./useDebounce";

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
          dispatch(
            setTranslatedText(
              translationData?.data?.data?.translations?.translatedText
            )
          );
        } else {
          dispatch(
            setTranslatedText(
              translationData?.data?.data?.translations?.translatedText
            )
          );
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
                translationDataNewPanel?.data?.data?.translations
                  ?.translatedText
              )
            );
          } else {
            dispatch(
              setNewPanelTranslatedText(
                translationDataNewPanel?.data?.data?.translations
                  ?.translatedText
              )
            );
          }
        }
      } catch (error) {
        throw error.message;
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
          setDetectedLanguage(result.data.data.detections[0].language);
        } catch (error) {
          throw error.messege;
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
