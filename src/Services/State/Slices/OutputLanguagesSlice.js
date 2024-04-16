import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetLanguage: {
    name: "Urdu",
    code: "ur",
  },
  supportLanguageOutput: {
    name: "Hindi",
    code: "hi",
  },

  newPanelTargetLanguage: {
    name: "Hindi",
    code: "hi",
  },
  newPanelSupportLanguage: {
    name: "Urdu",
    code: "ur",
  },

  activeOutput: "ur",
  newPanelActive: "hi",
  translatedText: "",
  newPanelTranslatedText: "hii",
  newPanel: false,
};

const OutputLanguagesSlice = createSlice({
  name: "outputLanguage",
  initialState,
  reducers: {
    setTargetLanguage: (state, action) => {
      const { name, code } = action.payload;
      state.targetLanguage.name = name;
      state.targetLanguage.code = code;
    },
    setNewPanelTargetLanguage: (state, action) => {
      const { name, code } = action.payload;
      state.newPanelTargetLanguage.name = name;
      state.newPanelTargetLanguage.code = code;
    },
    setActiveOutput: (state, action) => {
      state.activeOutput = action.payload;
    },
    setActiveNewPanel: (state, action) => {
      state.newPanelActive = action.payload;
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload;
    },
    setNewPanelTranslatedText: (state, action) => {
      state.newPanelTranslatedText = action.payload;
    },
    setNewPanel: (state, action) => {
      state.newPanel = action.payload;
    },
  },
});

export const {
  setTargetLanguage,
  setActiveOutput,
  setActiveNewPanel,
  setTranslatedText,
  setNewPanelTargetLanguage,
  setNewPanelTranslatedText,
  setNewPanel,
} = OutputLanguagesSlice.actions;
export default OutputLanguagesSlice.reducer;
