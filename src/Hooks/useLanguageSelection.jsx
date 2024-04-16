import { useDispatch, useSelector } from "react-redux";
import { setSourceLanguage } from "../Services/State/Slices/InputLanguagesSlice";
import { setTargetLanguage } from "../Services/State/Slices/OutputLanguagesSlice";
import { setNewPanelTargetLanguage } from "../Services/State/Slices/OutputLanguagesSlice";
import { toggleVisibilityClose } from "../Services/State/Slices/DropdownSlice";

const useLanguageSelection = () => {
  const dispatch = useDispatch();

  const inputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.inputDropdownActive
  );
  const outputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.outputDropdownActive
  );
  const newPanelDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.newPanelDropdownActive
  );

  const selectedLanguage = (lang) => {
    if (inputDropdownActive) {
      dispatch(
        setSourceLanguage({
          name: lang.name,
          code: lang.code,
        })
      );
      dispatch(toggleVisibilityClose());
    }

    if (outputDropdownActive) {
      dispatch(
        setTargetLanguage({
          name: lang.name,
          code: lang.code,
        })
      );
      dispatch(toggleVisibilityClose());
    }

    if (newPanelDropdownActive) {
      dispatch(
        setNewPanelTargetLanguage({
          name: lang.name,
          code: lang.code,
        })
      );
      dispatch(toggleVisibilityClose());
    }
  };

  return { selectedLanguage };
};

export default useLanguageSelection;
