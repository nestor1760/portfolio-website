import { createSlice } from "@reduxjs/toolkit";

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
    toggleSwitcher: (state) => {
      state.switcher = !state.switcher;
      saveToLocalStorage(state.switcher);
    }
  },
});

export const { toggleSwitcher } = switcherSlice.actions;
export default switcherSlice.reducer;