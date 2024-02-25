import { useDispatch, useSelector } from "react-redux";
import { animated } from "@react-spring/web";
import { toggleInputDropdown } from "../Services/State/Slices/DropdownSlice";
import useDropdownAnimation from "../Hooks/useDropdownAnimation";

const TranslationInput = () => {
  const dispatch = useDispatch();
  const InputDropdownActive = useSelector(
    (state) => state.dropdown.InputDropdownActive
  );

  const HandleInputToggle = () => {
    dispatch(toggleInputDropdown());
  };

  const { DropdownAnimation } = useDropdownAnimation(InputDropdownActive);

  return (
    <div className="w-[20.5rem] h-[28rem] rounded-2xl border border-customgray-300 border-opacity-50 flex flex-col justify-between">
      <div className="flex w-full h-10 items-center gap-4">
        <div className="pl-3 h-full flex items-center rounded-tl-2xl border-t border-l border-t-green-500 border-l-green-500">
          <span className="text-sm font-medium text-green-500">
            Detect language
          </span>
        </div>
        <div className="h-full flex items-center">
          <span className="text-sm font-medium text-customgray-300">
            English
          </span>
        </div>
        <div className="h-full flex items-center">
          <span className="text-sm font-medium text-customgray-300">Hindi</span>
        </div>
        <animated.img
          className="w-6 customgray-300 cursor-pointer"
          src="./Icons/chevron-down.svg"
          alt="down-icon"
          onClick={HandleInputToggle}
          style={{
            ...DropdownAnimation,
          }}
        />
      </div>
      <textarea
        className="w-full h-[23rem] px-4 text-base font-normal text-customgray-500 outline-none"
        name="input"
        autoCorrect="on"
      ></textarea>
      <div className="flex h-10 justify-center items-center gap-3">
        <img src="/Icons/play.svg" alt="play-icon" />
        <span className="text-[0.7rem] font-normal h-full flex items-center text-customgray-500">
          0 / 1000
        </span>
        <img src="/Icons/microphone-02.svg" alt="play-icon" />
      </div>
    </div>
  );
};

export default TranslationInput;
