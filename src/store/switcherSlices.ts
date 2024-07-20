import { createSlice } from "@reduxjs/toolkit";
import { ISwitcherState } from "./interfaces";
import { getCookie, setCookie } from "../components/General/Components/Cookie/utills";

const getSwitcherFromCookies = () => {
  const switcherValue = getCookie('theme')
  return switcherValue === 'true' ? true : false
}

const initialState: ISwitcherState = {
  switcher: getSwitcherFromCookies()
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    toggleSwitcher: (state) => {
      state.switcher = !state.switcher;
      setCookie('theme', state.switcher.toString(), 7);
    }
  },
});

export const { toggleSwitcher } = switcherSlice.actions;
export default switcherSlice.reducer;
