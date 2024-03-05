import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { animated } from "@react-spring/web";
import useDropdownAnimation from "../../Hooks/useDropdownAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleInputDropdown,
  toggleOutputDropdown,
} from "../../Services/State/Slices/DropdownSlice";
import useSetSearchParams from "../../Hooks/useSetSearchParams";
import { setActiveInput } from "../../Services/State/Slices/InputLanguagesSlice";
import { setActiveOutput } from "../../Services/State/Slices/OutputLanguagesSlice";

const HeaderSection = ({
  detectLanguage,
  sourceLanguage,
  supportLanguageInput,
  targetLanguage,
  supportLanguageOutput,
}) => {
  const activeInput = useSelector(
    (state) => state.PersistedReducer.inputLanguage.activeInput
  );
  const activeOutput = useSelector(
    (state) => state.PersistedReducer.outputLanguage.activeOutput
  );

  const dispatch = useDispatch();

  const { inputDropdownAnimation, outputDropdownAnimation } =
    useDropdownAnimation();

  const handleInputToggle = () => {
    dispatch(toggleInputDropdown());
  };

  const handleOutputToggle = () => {
    dispatch(toggleOutputDropdown());
  };

  const { setParams } = useSetSearchParams();

  const handleNavLinkClick = (value, input) => {
    if (input) {
      dispatch(setActiveInput(value));
    } else {
      dispatch(setActiveOutput(value));
    }
  };

  return (
    <div className="flex w-full h-10 items-center gap-4">
      {detectLanguage && sourceLanguage && supportLanguageInput ? (
        <>
          <NavLink
            to={setParams("sl", detectLanguage.code, true)}
            className={`pl-3 h-full flex items-center cursor-pointer  ${
              activeInput === "auto"
                ? " rounded-tl-2xl border-t border-l border-t-customgreen-500 border-l-customgreen-500"
                : "text-customgrey-400 hover:text-customgrey-500"
            }`}
            onClick={() => handleNavLinkClick(detectLanguage.code, true)}
          >
            <span
              className={`text-sm font-medium ${
                activeInput === "auto"
                  ? "text-customgreen-500"
                  : "text-customgrey-400 hover:text-customgrey-500"
              }`}
            >
              {detectLanguage?.name}
            </span>
          </NavLink>

          <NavLink
            to={setParams("sl", sourceLanguage.code, true)}
            className={`h-full flex items-center cursor-pointer ${
              activeInput === sourceLanguage.code
                ? " border-t  border-t-customgreen-500 text-customgreen-500"
                : "text-customgrey-400 hover:text-customgrey-500"
            }`}
            onClick={() => handleNavLinkClick(sourceLanguage.code, true)}
          >
            <span
              className={`text-sm font-medium ${
                activeInput === sourceLanguage.code
                  ? "text-customgreen-500"
                  : "text-customgrey-400 hover:text-customgrey-500"
              }`}
            >
              {sourceLanguage?.name}
            </span>
          </NavLink>
          <NavLink
            to={setParams("sl", supportLanguageInput.code, true)}
            className={`h-full flex items-center cursor-pointer ${
              activeInput === "hi"
                ? " border-t  border-t-customgreen-500 text-customgreen-500"
                : "text-customgrey-400 hover:text-customgrey-500"
            }`}
            onClick={() => handleNavLinkClick(supportLanguageInput.code, true)}
          >
            <span
              className={`text-sm font-medium ${
                activeInput === "hi"
                  ? "text-customgreen-500"
                  : "text-customgrey-400 hover:text-customgrey-500"
              }`}
            >
              {supportLanguageInput?.name}
            </span>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={setParams("tl", targetLanguage.code, false)}
            className={`pl-3 h-full flex items-center cursor-pointer ${
              activeOutput === targetLanguage.code
                ? " rounded-tl-2xl border-t border-l border-t-customgreen-500 border-l-customgreen-500 text-customgreen-500"
                : "text-customgrey-400 hover:text-customgrey-500"
            }`}
            onClick={() => handleNavLinkClick(targetLanguage.code, false)}
          >
            <span
              className={`text-sm font-medium ${
                activeOutput === targetLanguage.code
                  ? "text-customgreen-500"
                  : "text-customgrey-400 hover:text-customgrey-500"
              }`}
            >
              {targetLanguage.name}
            </span>
          </NavLink>
          <NavLink
            to={setParams("tl", supportLanguageOutput.code, false)}
            className={`h-full flex items-center cursor-pointer ${
              activeOutput === "hi"
                ? "text-customgreen-500 border-t border-t-customgreen-500 "
                : "text-customgrey-400 hover:text-customgrey-500"
            }`}
            onClick={() =>
              handleNavLinkClick(supportLanguageOutput.code, false)
            }
          >
            <span
              className={`text-sm font-medium ${
                activeOutput === "hi"
                  ? "text-customgreen-500"
                  : "text-customgrey-400 hover:text-customgrey-500"
              }`}
            >
              {supportLanguageOutput.name}
            </span>
          </NavLink>
        </>
      )}
      <animated.img
        className="w-6 customgray-300 cursor-pointer"
        src="./Icons/chevron-down.svg"
        alt="down-icon"
        onClick={() => {
          if (detectLanguage && sourceLanguage && supportLanguageInput) {
            handleInputToggle();
          } else {
            handleOutputToggle();
          }
        }}
        style={
          detectLanguage || sourceLanguage || supportLanguageInput
            ? inputDropdownAnimation
            : outputDropdownAnimation
        }
      />
    </div>
  );
};

export default HeaderSection;
