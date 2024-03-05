// DropdownSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputDropdownActive: false,
  outputDropdownActive: false,
};

const DropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleInputDropdown(state) {
      if (state.outputDropdownActive) {
        state.outputDropdownActive = false;
        state.inputDropdownActive = false;
        return;
      }

      state.inputDropdownActive = !state.inputDropdownActive;
    },
    toggleOutputDropdown(state) {
      if (state.inputDropdownActive) {
        state.inputDropdownActive = false;
        state.outputDropdownActive = false;
        return;
      }
      state.outputDropdownActive = !state.outputDropdownActive;
    },
    toggleVisibilityClose(state) {
      state.outputDropdownActive = false;
      state.inputDropdownActive = false;
    },
  },
});

export const {
  toggleInputDropdown,
  toggleOutputDropdown,
  toggleVisibilityClose,
} = DropdownSlice.actions;
export default DropdownSlice.reducer;
