import { useDispatch, useSelector } from "react-redux";
import { setInputText } from "../../Services/State/Slices/InputLanguagesSlice";

import { useSearchParams } from "react-router-dom";

const TextField = () => {
  const dispatch = useDispatch();
  const inputText = useSelector((state) => state.PersistedReducer.inputText);
  const [searchParams, setSearchParams] = useSearchParams();

  const param = new URLSearchParams(searchParams);

  const handleInputText = (e) => {
    const inputValue = e.target.value;
    const encodedValue = encodeURIComponent(inputValue);
    dispatch(setInputText(inputValue));
    param.set("text", encodedValue);
    setSearchParams(param.toString());
  };

  return (
    <textarea
      className="w-full h-[23rem] px-4 text-base font-normal text-customgray-500 outline-none resize-none"
      name="input"
      autoCorrect="on"
      value={inputText}
      onChange={handleInputText}
    ></textarea>
  );
};

export default TextField;
