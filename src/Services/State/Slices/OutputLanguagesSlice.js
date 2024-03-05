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

  activeOutput: "ur",
};

const OutputLanguagesSlice = createSlice({
  name: "outputLanguage",
  initialState,
  reducers: {
    setTargetLanguage: (state, action)=>{
      const { name, code } = action.payload;
      state.targetLanguage.name = name;
      state.targetLanguage.code = code;
    },
    setActiveOutput: (state, action) => {
      state.activeOutput = action.payload;
    },
  },
});

export const {setTargetLanguage, setActiveOutput} = OutputLanguagesSlice.actions
export default OutputLanguagesSlice.reducer;
