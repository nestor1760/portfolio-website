import { createSlice } from "@reduxjs/toolkit";
import { ISwitcherState } from "./interfaces";
import { cookieFunction } from "../components/General/Components/Cookie/utills";

const { getCookie, setTheme } = cookieFunction()

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
    },
    acceptCookieSwitcher: (state) => {
      state.switcher = !state.switcher;
      setTheme(state.switcher.toString())
    }
  },
});

export const { toggleSwitcher, acceptCookieSwitcher } = switcherSlice.actions;
export default switcherSlice.reducer;
