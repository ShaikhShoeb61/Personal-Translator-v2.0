// DropdownSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputDropdownActive: false,
  OutputDropdownActive: false,
};

const DropdownSlice = createSlice({
  name: "Dropdown",
  initialState,
  reducers: {
    toggleInputDropdown(state) {
      if (state.OutputDropdownActive) {
        state.OutputDropdownActive = false;
        state.InputDropdownActive = false;
        return;
      }

      state.InputDropdownActive = !state.InputDropdownActive;
    },
    toggleOutputDropdown(state) {
      if (state.InputDropdownActive) {
        state.InputDropdownActive = false;
        state.OutputDropdownActive = false;
        return;
      }
      state.OutputDropdownActive = !state.OutputDropdownActive;
    },
    toggleVisibilityClose(state) {
      state.OutputDropdownActive = false;
      state.InputDropdownActive = false;
    },
  },
});

export const {
  toggleInputDropdown,
  toggleOutputDropdown,
  toggleVisibilityClose,
} = DropdownSlice.actions;
export default DropdownSlice.reducer;
