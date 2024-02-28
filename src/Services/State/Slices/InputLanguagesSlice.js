import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AutoDetect: "",
  FirstLanguage: {
    name: "English",
    code: "en",
    isActive: false,
  },
  SecondLanguage: {
    name: "Hindi",
    code: "hi",
  },
};

const InputLanguagesSlice = createSlice({
  name: "InputLanguage",
  initialState,
  reducers: {
    InputLanguageSelection: (state, action) => {
      const { name, code, isActive } = action.payload;
      state.FirstLanguage = { name, code, isActive };
    },
  },
});

export const { InputLanguageSelection } = InputLanguagesSlice.actions;
export default InputLanguagesSlice.reducer;
