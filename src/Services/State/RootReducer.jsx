import { combineReducers } from "@reduxjs/toolkit";
import dropdownReducer from "./Slices/DropdownSlice";
import InputLanguagesReducer from "./Slices/InputLanguagesSlice";
import OutputLanguagesReducer from "./Slices/OutputLanguagesSlice";

const RootReducer = combineReducers({
  dropdown: dropdownReducer,
  InputLanguage: InputLanguagesReducer,
  Outputlanguage: OutputLanguagesReducer,
});

export default RootReducer;
