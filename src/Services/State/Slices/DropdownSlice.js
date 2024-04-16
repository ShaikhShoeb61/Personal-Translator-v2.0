import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputDropdownActive: false,
  outputDropdownActive: false,
  newPanelDropdownActive: false,
};

const DropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleInputDropdown(state) {
      if (state.outputDropdownActive || state.inputDropdownActive) {
        state.outputDropdownActive = false;
        state.inputDropdownActive = false;
        state.newPanelDropdownActive = false;
        return;
      }

      state.inputDropdownActive = !state.inputDropdownActive;
    },

    toggleOutputDropdown(state) {
      if (state.inputDropdownActive || state.newPanelDropdownActive) {
        state.inputDropdownActive = false;
        state.outputDropdownActive = false;
        state.newPanelDropdownActive = false;
        return;
      }
      state.outputDropdownActive = !state.outputDropdownActive;
    },

    toggleNewPanelDropdown(state) {
      if (state.inputDropdownActive || state.outputDropdownActive) {
        state.inputDropdownActive = false;
        state.outputDropdownActive = false;
        state.newPanelDropdownActive = false;
        return;
      }
      state.newPanelDropdownActive = !state.newPanelDropdownActive;
    },

    toggleVisibilityClose(state) {
      state.outputDropdownActive = false;
      state.inputDropdownActive = false;
      state.newPanelDropdownActive = false;
    },
  },
});

export const {
  toggleInputDropdown,
  toggleOutputDropdown,
  toggleNewPanelDropdown,
  toggleVisibilityClose,
} = DropdownSlice.actions;
export default DropdownSlice.reducer;
