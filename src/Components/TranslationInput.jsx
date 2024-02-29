import { useDispatch, useSelector } from "react-redux";
import { animated } from "@react-spring/web";
import { toggleInputDropdown } from "../Services/State/Slices/DropdownSlice";
import useDropdownAnimation from "../Hooks/useDropdownAnimation";
import useLanguageSelected from "../Hooks/useLanguageSelected";

const TranslationInput = () => {
  const dispatch = useDispatch();
  const InputDropdownActive = useSelector(
    (state) => state.dropdown.InputDropdownActive
  );
  const FirstInputLanguage = useSelector(
    (state) => state.InputLanguage.LanguagesBar
  );
  const { DropdownAnimation } = useDropdownAnimation(InputDropdownActive);

  const HandleInputToggle = () => {
    dispatch(toggleInputDropdown());
  };

  const { HandleClassName, HandleLanguageSelection, active } =
    useLanguageSelected();

  return (
    <div className="w-[20.5rem] h-[28rem] rounded-2xl border border-customgray-300 border-opacity-50 flex flex-col justify-between">
      <div className="flex w-full h-10 items-center gap-4">
        {FirstInputLanguage &&
          FirstInputLanguage.map((lang, index) => (
            <div
              className={`${
                lang.type === "auto-detect" ? "pl-3" : ""
              } h-full flex items-center cursor-pointer ${HandleClassName(
                lang.type,
                index
              )}`}
              key={index}
              onClick={(e) => HandleLanguageSelection(index)}
            >
              <span
                className={`text-sm font-medium ${
                  index === active
                    ? "text-customgreen-500"
                    : "text-customgray-300"
                }`}
              >
                {lang.name}
              </span>
            </div>
          ))}

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
        className="w-full h-[23rem] px-4 text-base font-normal text-customgray-500 outline-none resize-none"
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
