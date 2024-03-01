import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LanguagesBar: [
    {
      type: "output-first-language",
      name: "English",
      code: "en",
    },
    {
      type: "output-second-lnguage",
      name: "Hindi",
      code: "hi",
    },
  ],
  ActiveLanguageIndexOutput: null,
};

const OutputLanguagesSlice = createSlice({
  name: "Outputlanguage",
  initialState,
  reducers: {
    OutputLanguageSelection: (state, action) => {
      const { name, code } = action.payload;
      const language = state.LanguagesBar.find(
        (lang) => lang.type === "output-first-language"
      );
      if (language) {
        language.name = name;
        language.code = code;
      }
    },
    SetActiveLanguageIndexOutput(state, action) {
      state.ActiveLanguageIndexOutput = action.payload;
    },
  },
});

export const { OutputLanguageSelection, SetActiveLanguageIndexOutput } =
  OutputLanguagesSlice.actions;
export default OutputLanguagesSlice.reducer;
