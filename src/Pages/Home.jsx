import TranslatorPanel from "../Components/translatorPanel";
import HeaderSection from "../Components/UI/headerSection";
import FooterSection from "../Components/UI/FooterSection";
import TextField from "../Components/UI/TextField";
import SupportedLanguages from "../Components/SupportedLanguages";
import { useSelector } from "react-redux";
import SwipeLanguage from "../Components/UI/SwipeLanguage";
const Home = () => {
  const inputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.inputDropdownActive
  );
  const outputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.outputDropdownActive
  );

  const { detectLanguage, sourceLanguage, supportLanguageInput } = useSelector(
    (state) => state.PersistedReducer.inputLanguage
  );

  const { targetLanguage, supportLanguageOutput } = useSelector(
    (state) => state.PersistedReducer.outputLanguage
  );

  return (
    <main className="flex gap-6 relative">
      {(inputDropdownActive || outputDropdownActive) && <SupportedLanguages />}
      <TranslatorPanel
        HeaderSection={
          <HeaderSection
            detectLanguage={detectLanguage}
            sourceLanguage={sourceLanguage}
            supportLanguageInput={supportLanguageInput}
          />
        }
        FooterSection={
          <FooterSection
            playIcon="/Icons/play.svg"
            recordIcon="/Icons/microphone-02.svg"
            inputCounts="0 / 1000"
          />
        }
        TextField={<TextField />}
      />
      <SwipeLanguage src="\Icons\swipe.svg" />
      <TranslatorPanel
        HeaderSection={
          <HeaderSection
            targetLanguage={targetLanguage}
            supportLanguageOutput={supportLanguageOutput}
          />
        }
        FooterSection={
          <FooterSection
            playIcon="/Icons/play.svg"
            copyIcon="/Icons/clipboard.svg"
            newPanelIcon="/Icons/copy-02.svg"
          />
        }
      />
    </main>
  );
};

export default Home;
