import { useState } from "react";
import useLanguagesFilter from "../Hooks/useLanguagesFilter";
import { useGetLanguagesListQuery } from "../Services/Api/LanguagesListApi";
import { toggleVisibilityClose } from "../Services/State/Slices/DropdownSlice";
import { useDispatch } from "react-redux";
import useLanguageSelection from "../Hooks/useLanguageSelection";
import useSetSearchParams from "../Hooks/useSetSearchParams";

const SupportedLanguages = () => {
  const {
    data,
    isLoading: loading,
    isError: error,
  } = useGetLanguagesListQuery();

  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const { filteredLanguages } = useLanguagesFilter(data, inputText);
  const { selectedLanguage } = useLanguageSelection();
  const { updateParams } = useSetSearchParams();

  const handleBackAction = () => {
    dispatch(toggleVisibilityClose());
  };

  return (
    <div className="w-full h-[23rem] absolute top-[9%] bg-white border-b border-x border-customgray-300 border-opacity-50">
      <div className="w-full h-10 px-2 flex justify-start items-center border-y border-customgray-300 border-opacity-50 bg-white gap-1">
        <img
          className="px-2 text-customgray-500 cursor-pointer"
          src="/Icons/arrow-left.svg"
          alt="arrow-left"
          onClick={handleBackAction}
        />
        <input
          className="w-full h-full outline-none font-normal text-[14px] placeholder:text-customgray-300"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Search languages"
        />
      </div>

      <div className="w-full h-80 overflow-auto sbar relative">
        <div className="w-full flex flex-wrap items-start content-start">
          {loading ? (
            <div className="absolute left-[45%] top-[45%]">Loading...</div>
          ) : error ? (
            <div className="absolute left-[45%] top-[45%]">
              Error: Something went wrong
            </div>
          ) : inputText && filteredLanguages.length === 0 ? (
            <div className="absolute left-[45%] top-[45%]">No results</div>
          ) : (
            filteredLanguages.map((lang) =>
              lang.name && lang.code ? (
                <ul
                  className="w-[10.5rem] h-[2rem] px-[1.25rem] hover:bg-customgreen-50 hover:cursor-pointer flex items-center text-customgray-300"
                  key={lang.code}
                  onClick={(e) => {
                    selectedLanguage(lang, e);
                    updateParams(lang.code);
                  }}
                >
                  <li className="text-[0.87rem] font-normal">{lang.name}</li>
                </ul>
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportedLanguages;
