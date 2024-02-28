import React, { useState } from "react";
import { useGetLanguagesListQuery } from "../Services/Api/LanguagesListApi";
import useLanguagesFilter from "../Hooks/useLanguagesFilter";
import { useDispatch } from "react-redux";
import { toggleVisibilityClose } from "../Services/State/Slices/DropdownSlice";
import useLanguageSelection from "../Hooks/useLanguageSelection";

const SupportedLanguages = () => {
  const dispatch = useDispatch();
  const {
    data,
    isLoading: loading,
    isError: error,
  } = useGetLanguagesListQuery();
  const [InputText, setInputText] = useState("");

  const { FilteredLanguages } = useLanguagesFilter(data, InputText);

  const HandleBackButton = () => {
    dispatch(toggleVisibilityClose());
  };

  const { HandleLanguageSelection } = useLanguageSelection();

  return (
    <div className="w-full h-[23rem] absolute top-[9%] bg-white border-b border-x border-customgray-300 border-opacity-50">
      <div className="w-full h-10 px-2 flex justify-start items-center border-y border-customgray-300 border-opacity-50 bg-white gap-1">
        <img
          className="px-2 text-customgray-500 cursor-pointer"
          src="/Icons/arrow-left.svg"
          alt="arrow-left"
          onClick={HandleBackButton}
        />
        <input
          className="w-full h-full outline-none font-normal text-[14px] placeholder:text-customgray-300"
          type="text"
          placeholder="Search languages"
          value={InputText}
          onChange={(e) => setInputText(e.target.value)}
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
          ) : FilteredLanguages.length === 0 ? (
            <div className="absolute left-[45%] top-[45%]">No results</div>
          ) : (
            FilteredLanguages.map((lang) =>
              lang.name && lang.code ? (
                <div
                  className="w-[10.5rem] h-[2rem] px-[1.25rem] hover:bg-customgreen-50 hover:cursor-pointer flex items-center"
                  onClick={(e) => HandleLanguageSelection(e)}
                  key={lang.code}
                >
                  <span
                    className="text-[0.87rem] font-normal"
                    data-lang={lang.code}
                  >
                    {lang.name}
                  </span>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportedLanguages;
