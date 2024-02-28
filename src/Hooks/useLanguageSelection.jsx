import { useDispatch, useSelector } from "react-redux";
import { toggleVisibilityClose } from "../Services/State/Slices/DropdownSlice";
import { InputLanguageSelection } from "../Services/State/Slices/InputLanguagesSlice";
import { OutputLanguageSelection } from "../Services/State/Slices/OutputLanguagesSlice";

const useLanguageSelection = () => {
  const dispatch = useDispatch();


  const InputDropdownActive = useSelector(
    (state) => state.dropdown.InputDropdownActive
  );
  const OutputDropdownActive = useSelector(
    (state) => state.dropdown.OutputDropdownActive
  );

  const HandleLanguageSelection = (e) => {
    if (!e || !e.target) {
      console.error("Event object or event target is undefined");
      return;
    }

    const name = e.target.innerText;
    const code = e.target.getAttribute("data-lang");

    if (!name || !code) {
      console.error("Language name or code is undefined");
      return;
    }

    if (InputDropdownActive) {
      dispatch(InputLanguageSelection({ name, code, isActive:true }));
      dispatch(toggleVisibilityClose());
    }

    if (OutputDropdownActive) {
      dispatch(OutputLanguageSelection({ name, code }));
      dispatch(toggleVisibilityClose());
    }
  };

  return { HandleLanguageSelection };
};

export default useLanguageSelection;
