import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../cookies/utills";
import { ISwitcherState } from "./interfaces";

// //to save swicther value to localStorage
// const saveToLocalStorage = (switcher: boolean) => {
//   localStorage.setItem('switcher', JSON.stringify(switcher));
// }

// //get switcher value from localStorage
// const loadFromLocalStorage = () => {
//   const switcher = localStorage.getItem('switcher');
//   return switcher ? JSON.parse(switcher) : true;
// }

const getSwitcherFromCookies = () => {
  const switcherValue = getCookie('theme')
  return switcherValue === 'true' ? true : false
}

const initialState: ISwitcherState = {
  // switcher: loadFromLocalStorage(),
  switcher: getSwitcherFromCookies()
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    toggleSwitcher: (state) => {
      state.switcher = !state.switcher;
      // saveToLocalStorage(state.switcher);
      setCookie('theme', state.switcher.toString(), 7);
    }
  },
});

export const { toggleSwitcher } = switcherSlice.actions;
export default switcherSlice.reducer;