import { createSlice } from "@reduxjs/toolkit";
// import { getCookie, setCookie } from "../cookies/utills";
import { ISwitcherState } from "./interfaces";

// const getSwitcherFromCookies = () => {
//   const switcherValue = getCookie('theme')
//   return switcherValue === 'true' ? true : false
// }

const initialState: ISwitcherState = {
  // switcher: getSwitcherFromCookies()
  switcher: true
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    toggleSwitcher: (state) => {
      state.switcher = !state.switcher;
      // setCookie('theme', state.switcher.toString(), 7);
    }
  },
});

export const { toggleSwitcher } = switcherSlice.actions;
export default switcherSlice.reducer;
