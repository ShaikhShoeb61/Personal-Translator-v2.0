import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LanguagesBar: [
    {
      type: "auto-detect",
      name: "Detect Language",
      code: "auto",
    },
    {
      type: "input-first-language",
      name: "English",
      code: "en",
    },
    {
      type: "input-second-lnguage",
      name: "Hindi",
      code: "hi",
    },
  ],

  ActiveLanguageIndexInput: null,
};

const InputLanguagesSlice = createSlice({
  name: "InputLanguage",
  initialState,
  reducers: {
    InputLanguageSelection: (state, action) => {
      const { name, code } = action.payload;
      const language = state.LanguagesBar.find(
        (lang) => lang.type === "input-first-language"
      );
      if (language) {
        language.name = name;
        language.code = code;
      }
    },

    SetActiveLanguageIndexInput(state, action) {
      state.ActiveLanguageIndexInput = action.payload;
    },
  },
});

export const { InputLanguageSelection, SetActiveLanguageIndexInput } =
  InputLanguagesSlice.actions;
export default InputLanguagesSlice.reducer;
