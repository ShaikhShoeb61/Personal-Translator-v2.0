import React, { useState } from "react";
import useVoiceInteraction from "../../Hooks/useVoiceInteraction";
import { useSelector } from "react-redux";

const FooterSection = ({
  playIcon,
  pausedIcon,
  listenIcon,
  stopIcon,
  copyIcon,
  newPanelIcon,
  newPanelOffState,
  inputText,
  translatedText,
  handleNewPanel,
  newPanelTranslatedText,
  handleParamsNewPanel,
}) => {
  const [paused, setPaused] = useState(false);
  const [stopListening, setStopListening] = useState(false);

  const { copyToClipboard, textToSpeech, speechToText, transcript } =
    useVoiceInteraction(setPaused, setStopListening);

  const { newPanel } = useSelector(
    (state) => state.PersistedReducer.outputLanguage
  );

  return (
    <div className="flex h-10 justify-center items-center gap-3">
      <img
        className="cursor-pointer"
        src={paused ? pausedIcon : playIcon}
        alt="play-icon"
        onClick={() =>
          textToSpeech(inputText || translatedText || newPanelTranslatedText)
        }
      />
      {listenIcon && (
        <>
          <span className="text-[0.7rem] font-normal h-full flex items-center text-customgray-500">
            {`${inputText.length} / 1000`}
          </span>
          <img
            className="cursor-pointer"
            src={stopListening ? stopIcon : listenIcon}
            alt="record-icon"
            onClick={speechToText}
          />
        </>
      )}
      {copyIcon && (
        <img
          className="cursor-pointer"
          src={copyIcon}
          alt="copy-icon"
          onClick={() =>
            copyToClipboard(translatedText || newPanelTranslatedText)
          }
        />
      )}
      {newPanelIcon && (
        <img
          className={newPanel ? "" : "cursor-pointer"}
          src={newPanel ? newPanelOffState : newPanelIcon}
          alt="new-panel-icon"
          onClick={handleNewPanel}
        />
      )}
    </div>
  );
};

export default FooterSection;
