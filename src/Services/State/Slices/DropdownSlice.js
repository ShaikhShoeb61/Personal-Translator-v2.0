// DropdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  InputDropdownActive: false,
  OutputDropdownActive: false,
};

const DropdownSlice = createSlice({
  name: 'Dropdown',
  initialState,
  reducers: {
    toggleInputDropdown(state) {
      state.InputDropdownActive = !state.InputDropdownActive;
      if (state.InputDropdownActive) {
        state.OutputDropdownActive = false; // Set output to false when input is true
      }
    },
    toggleOutputDropdown(state) {
      state.OutputDropdownActive = !state.OutputDropdownActive;
      if (state.OutputDropdownActive) {
        state.InputDropdownActive = false; // Set output to false when input is true
      }
    },
  },
});

export const { toggleInputDropdown, toggleOutputDropdown } = DropdownSlice.actions;
export default DropdownSlice.reducer;
