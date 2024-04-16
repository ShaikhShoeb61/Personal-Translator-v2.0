import { useDispatch, useSelector } from "react-redux";
import { setInputText } from "../Services/State/Slices/InputLanguagesSlice";
import { useSearchParams } from "react-router-dom";
import { setNewPanel } from "../Services/State/Slices/OutputLanguagesSlice";
import { useAuth0 } from "@auth0/auth0-react";
import TranslatorPanel from "../Components/TranslatorPanel"
import HeaderSection from "../Components/UI/HeaderSection";
import FooterSection from "../Components/UI/FooterSection";
import TextField from "../Components/UI/TextField";
import SupportedLanguages from "../Components/SupportedLanguages";
import SwipeLanguage from "../Components/UI/SwipeLanguage";
import useLanguageSwipe from "../Hooks/useLanguageSwipe";
import useSetSearchParams from "../Hooks/useSetSearchParams";

const Home = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const inputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.inputDropdownActive
  );

  const outputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.outputDropdownActive
  );
  const newPanelDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.newPanelDropdownActive
  );

  const { translatedText, newPanelTranslatedText } = useSelector(
    (state) => state.PersistedReducer.outputLanguage
  );

  const { detectLanguage, sourceLanguage, supportLanguageInput, inputText } =
    useSelector((state) => state.PersistedReducer.inputLanguage);

  const {
    targetLanguage,
    supportLanguageOutput,
    newPanelTargetLanguage,
    newPanelSupportLanguage,
    newPanel,
    newPanelActive,
  } = useSelector((state) => state.PersistedReducer.outputLanguage);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const param = new URLSearchParams(searchParams);

  const { handleSwipeLanguage, handleSwipeLanguageNewPanel } =
    useLanguageSwipe();
  const { handleParamsNewPanel } = useSetSearchParams();

  const handleNewPanel = () => {
    if (isAuthenticated) {
      dispatch(setNewPanel(true));
    } else {
      loginWithPopup();
    }
  };

  const handleCloseNewPanel = () => {
    dispatch(setNewPanel(false));
  };

  const handleInputText = (e) => {
    const inputValue = e.target.value;
    dispatch(setInputText(inputValue));
    param.set("text", inputValue);
    setSearchParams(param.toString());
  };

  return (
    <main className="h-full w-full justify-center items-center flex">
      <div className="flex gap-6 relative">
        {(inputDropdownActive ||
          outputDropdownActive ||
          newPanelDropdownActive) && <SupportedLanguages />}
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
              pausedIcon="Icons/paused.svg"
              listenIcon="/Icons/microphone-02.svg"
              stopIcon="/Icons/stop-listening.svg"
              inputText={inputText}
            />
          }
          TextField={
            <TextField
              handleInputText={handleInputText}
              inputText={inputText}
            />
          }
        />
        <SwipeLanguage
          className={`absolute ${
            newPanel ? "left-[32%]" : "left-[48.314%]"
          } top-[-4%] cursor-pointer`}
          src="\Icons\swipe.svg"
          handleSwipeLanguage={handleSwipeLanguage}
        />

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
              pausedIcon="Icons/paused.svg"
              newPanelIcon="/Icons/copy-02.svg"
              newPanelOffState="/Icons/new-panel-off-state.svg"
              translatedText={translatedText}
              handleNewPanel={handleNewPanel}
              handleParamsNewPanel={handleParamsNewPanel}
            />
          }
          TextField={<TextField translatedText={translatedText} />}
        />
        {newPanel ? (
          <>
            <SwipeLanguage
              className="absolute left-[66%] top-[-4%] cursor-pointer"
              src="\Icons\swipe.svg"
              handleSwipeLanguageNewPanel={handleSwipeLanguageNewPanel}
            />
            <TranslatorPanel
              HeaderSection={
                <HeaderSection
                  newPanelTargetLanguage={newPanelTargetLanguage}
                  newPanelSupportLanguage={newPanelSupportLanguage}
                  newPanelActive={newPanelActive}
                  newPanel={newPanel}
                  closeIcon="/Icons/close-icon.svg"
                  handleCloseNewPanel={handleCloseNewPanel}
                />
              }
              FooterSection={
                <FooterSection
                  playIcon="/Icons/play.svg"
                  copyIcon="/Icons/clipboard.svg"
                  newPanelTranslatedText={newPanelTranslatedText}
                  pausedIcon="Icons/paused.svg"
                />
              }
              TextField={
                <TextField newPanelTranslatedText={newPanelTranslatedText} />
              }
            />
          </>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
