import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FirstLanguage: {
    name: "Hindi",
    code: "hi",
  },
  SecondLanguage: {
    name: "Urdu",
    code: "ur",
  },
};

const OutputLanguagesSlice = createSlice({
  name: "Outputlanguage",
  initialState,
  reducers: {
    OutputLanguageSelection: (state, action) => {
      const { name, code } = action.payload;
      state.FirstLanguage = { name, code };
    },
  },
});

export const { OutputLanguageSelection } = OutputLanguagesSlice.actions;
export default OutputLanguagesSlice.reducer;
