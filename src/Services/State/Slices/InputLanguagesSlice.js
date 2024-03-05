import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detectLanguage: {
    name: "Detect language",
    code: "auto",
  },
  sourceLanguage: {
    name: "English",
    code: "en",
  },
  supportLanguageInput: {
    name: "Hindi",
    code: "hi",
  },

  activeInput: "auto",
  inputText: "",
};

const inputLanguageSlice = createSlice({
  name: "inputLanguage",
  initialState,
  reducers: {
    setSourceLanguage: (state, action) => {
      const { name, code } = action.payload;
      state.sourceLanguage.name = name;
      state.sourceLanguage.code = code;
    },

    setActiveInput: (state, action) => {
      state.activeInput = action.payload;
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export const { setSourceLanguage, setActiveInput, setInputText } = inputLanguageSlice.actions;
export default inputLanguageSlice.reducer;
