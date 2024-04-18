import useTranslation from "../../Hooks/useTranslation";

const TextField = ({
  handleInputText,
  inputText,
  translatedText,
  newPanelTranslatedText,
  output,
}) => {
  const { isError, isLoading } = useTranslation();
  const displayText = inputText || translatedText || newPanelTranslatedText;

  const defaultOnChange = () => {};

  return (
    <div>
      <textarea
        className="w-full h-[23rem] px-4 text-base font-normal text-customgray-500 outline-none resize-none"
        name={inputText ? "input" : "output"}
        value={displayText ? displayText : ""}
        readOnly={output ? true : false}
        onInput={handleInputText || defaultOnChange}
        maxLength={1000}
      />
    </div>
  );
};

export default TextField;
