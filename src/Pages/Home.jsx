import SupportedLanguages from "../Components/SupportedLanguages";
import TranslationInput from "../Components/TranslationInput";
import TranslationOutput from "../Components/TranslationOutput";
import { useSelector } from "react-redux";
import SwipeLanguage from "../Components/UI/SwipeLanguage";

const Home = () => {
  const InputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.InputDropdownActive
  );
  const OutputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.OutputDropdownActive
  );
  return (
    <main className="flex gap-6 relative">
      {(InputDropdownActive || OutputDropdownActive) && <SupportedLanguages />}
      <TranslationInput />
      <SwipeLanguage src={"/Icons/swipe.svg"} />
      <TranslationOutput />
    </main>
  );
};

export default Home;
