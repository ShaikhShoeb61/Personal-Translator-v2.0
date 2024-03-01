import React from "react";
import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleOutputDropdown } from "../Services/State/Slices/DropdownSlice";
import useDropdownAnimation from "../Hooks/useDropdownAnimation";
import useLanguageSelected from "../Hooks/useLanguageSelected";
import useLanguageParams from "../Hooks/useLanguageParams";

const TranslationOutput = () => {
  const dispatch = useDispatch();

  const OutputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.OutputDropdownActive
  );

  const FirstOutputLanguage = useSelector(
    (state) => state.PersistedReducer.Outputlanguage.LanguagesBar
  );

  const ActiveIndexOutput = useSelector(
    (state) => state.PersistedReducer.Outputlanguage.ActiveLanguageIndexOutput
  );
  const { DropdownAnimation } = useDropdownAnimation(OutputDropdownActive);
  const { HandleParams, SourceLanguage } = useLanguageParams();
  const { HandleClassName, HandleLanguageSelection } = useLanguageSelected();

  const HandleOutputToggle = () => {
    dispatch(toggleOutputDropdown());
  };

  return (
    <div className="w-[20.5rem] h-[28rem] rounded-2xl border border-customgray-300 border-opacity-50 flex flex-col justify-between">
      <div className="flex w-full h-10 items-center gap-4">
        {FirstOutputLanguage &&
          FirstOutputLanguage.map((lang, index) => (
            <Link
              to={{
                pathname: "/",
                search: `?sl=${SourceLanguage}&tl=${lang.code}&op=translate`,
              }}
              className={`h-full flex items-center cursor-pointer ${
                lang.type === "output-first-language" ? "pl-3" : ""
              } ${HandleClassName(lang.type, index)}`}
              key={index}
              onClick={() => {
                HandleLanguageSelection(index, lang);
                HandleParams(lang.code);
              }}
            >
              <span
                className={`text-sm font-medium ${
                  index === ActiveIndexOutput
                    ? "text-customgreen-500"
                    : "text-customgray-300"
                }`}
              >
                {lang.name}
              </span>
            </Link>
          ))}

        <animated.img
          className="w-6 customgray-300 cursor-pointer"
          src="./Icons/chevron-down.svg"
          alt="down-icon"
          onClick={HandleOutputToggle}
          style={{
            ...DropdownAnimation,
          }}
        />
      </div>
      <textarea
        className="w-full h-[23rem] px-4 text-base font-normal text-customgray-500 outline-none resize-none "
        name="output"
        readOnly
      ></textarea>
      <div className="flex h-10 justify-center items-center gap-3">
        <img src="/Icons/play.svg" alt="play-icon" />
        <img src="/Icons/clipboard.svg" alt="copy-to-clipboard-icon" />
        <img src="/Icons/copy-02.svg" alt="new-output-panel-icon" />
      </div>
    </div>
  );
};

export default TranslationOutput;
