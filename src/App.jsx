import TranslationInput from "./Components/TranslationInput";
import TranslationOutput from "./Components/TranslationOutput";

const App = () => {
  return (
    <main className="flex gap-6 relative">
      <TranslationInput />
      <img
        className="absolute left-[48.314%] top-[-4%]"
        src="/Icons/swipe.svg"
        alt="language-swipe"
      />
      <TranslationOutput />
    </main>
  );
};

export default App;
