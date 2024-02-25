import React from "react";
import { animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { toggleOutputDropdown } from "../Services/State/Slices/DropdownSlice";
import useDropdownAnimation from "../Hooks/useDropdownAnimation";

const TranslationOutput = () => {
  const dispatch = useDispatch();
  const OutputDropdownActive = useSelector(
    (state) => state.dropdown.OutputDropdownActive
  );

  const HandleOutputToggle = () => {
    dispatch(toggleOutputDropdown());
  };

  const { DropdownAnimation } = useDropdownAnimation(OutputDropdownActive);

  return (
    <div className="w-[20.5rem] h-[28rem] rounded-2xl border border-customgray-300 border-opacity-50 flex flex-col justify-between">
      <div className="flex w-full h-10 items-center gap-4">
        <div className="pl-3 h-full flex items-center rounded-tl-2xl border-t border-l border-t-green-500 border-l-green-500">
          <span className="text-sm font-medium text-green-500">Hindi</span>
        </div>
        <div className="h-full flex items-center">
          <span className="text-sm font-medium text-customgray-300">Urdu</span>
        </div>
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
