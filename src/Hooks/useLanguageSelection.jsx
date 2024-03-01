import { useDispatch, useSelector } from "react-redux";
import { toggleVisibilityClose } from "../Services/State/Slices/DropdownSlice";
import { InputLanguageSelection } from "../Services/State/Slices/InputLanguagesSlice";
import { OutputLanguageSelection } from "../Services/State/Slices/OutputLanguagesSlice";

const useLanguageSelection = () => {
  const dispatch = useDispatch();

  const InputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.InputDropdownActive
  );
  const OutputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.OutputDropdownActive
  );

  const HandleLanguageSelection = (lang, e) => {
    if (
      e.target.innerText.toLowerCase().includes(lang.name.toLowerCase()) &&
      InputDropdownActive
    ) {
      dispatch(
        InputLanguageSelection({
          name: lang.name,
          code: lang.code,
        })
      );
      dispatch(toggleVisibilityClose());
    }

    if (
      e.target.innerText.toLowerCase().includes(lang.name.toLowerCase()) &&
      OutputDropdownActive
    ) {
      dispatch(
        OutputLanguageSelection({
          name: lang.name,
          code: lang.code,
        })
      );
      dispatch(toggleVisibilityClose());
    }
  };

  return { HandleLanguageSelection };
};

export default useLanguageSelection;
