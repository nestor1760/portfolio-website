import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISwitcherState } from "./interfaces";

type SwitcherState = {
  switcher: boolean,
}

//to save swicther value to localStorage
const saveToLocalStorage = (switcher: boolean) => {
  localStorage.setItem('switcher', JSON.stringify(switcher));
}

//get switcher value from localStorage
const loadFromLocalStorage = () => {
  const switcher = localStorage.getItem('switcher');
  return switcher ? JSON.parse(switcher) : true;
}

const initialState: SwitcherState = {
  switcher: loadFromLocalStorage(),
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    setToggleIsOn: (state, action: PayloadAction<ISwitcherState>) => {
      state.switcher = action.payload.switcher;
      saveToLocalStorage(state.switcher);
    },
    toggleIsOn: (state) => {
      state.switcher = !state.switcher;
      saveToLocalStorage(state.switcher);
    }
  },
});

export const { setToggleIsOn, toggleIsOn } = switcherSlice.actions;
export default switcherSlice.reducer;