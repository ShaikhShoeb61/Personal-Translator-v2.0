import { combineReducers } from "@reduxjs/toolkit";
import dropdownReducer from "./Slices/DropdownSlice";
import inputLanguagesReducer from "./Slices/InputLanguagesSlice";
import outputLanguagesReducer from "./Slices/OutputLanguagesSlice";

const RootReducer = combineReducers({
  dropdown: dropdownReducer,
  inputLanguage: inputLanguagesReducer,
  outputLanguage: outputLanguagesReducer,
});

export default RootReducer;
