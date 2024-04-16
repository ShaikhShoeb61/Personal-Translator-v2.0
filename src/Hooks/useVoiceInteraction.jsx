import { useVoiceToText } from "react-speakup";
import React from "react";

const useVoiceInteraction = (setPaused, setStopListening) => {
  const { startListening, stopListening, listening, transcript, error } =
    useVoiceToText();

  React.useEffect(() => {
    if (error) {
      console.error("Speech recognition error:", error);
    }
  }, [error]);

  const textToSpeech = (texts) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = texts;

    utterance.onstart = () => {
      setPaused(true);
    };

    utterance.onend = () => {
      setPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const copyToClipboard = (translatedText) => {
    navigator.clipboard
      .writeText(translatedText)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
      });
  };

  const speechToText = () => {
    if (listening) {
      stopListening();
      setStopListening(false);
    } else {
      startListening();
      setStopListening(true);
    }
  };

  return { copyToClipboard, textToSpeech, speechToText, transcript };
};

export default useVoiceInteraction;
