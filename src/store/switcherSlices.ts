import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISwitcherState } from "./interfaces";

type SwitcherState = {
  switchOn: boolean,
}

const initialState: SwitcherState = {
  switchOn: true,
}


//to save selected language to localStorage
const saveToLocalStorage = (switchOn: string) => {
  localStorage.setItem('switchOn', JSON.stringify(switchOn));
}

//get selected language from localStorage
const loadFromLocalStorage = () => {
  const selectedLanguage = localStorage.getItem('switchOn');
  return selectedLanguage ? JSON.parse(selectedLanguage) : null;
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    setToggleIsOn: (state, action: PayloadAction<ISwitcherState>) => {
      state.switchOn = action.payload.switchOn;
    },
    toggleIsOn: (state) => {
      state.switchOn = !state.switchOn;
    }
  },
});

export const { setToggleIsOn, toggleIsOn } = switcherSlice.actions;
export default switcherSlice.reducer;