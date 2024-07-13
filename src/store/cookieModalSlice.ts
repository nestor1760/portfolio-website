import { createSlice } from "@reduxjs/toolkit";
import { getSessionItem, removeSessionItem, setSessionItem } from "./utills";
import { TCookieConsentState } from "./interfaces";

const initialState: TCookieConsentState = {
  content: getSessionItem('cookieModal') === 'true' ? true : (getSessionItem('cookieModal') === 'false' ? false : true),
};

const cookieConsentSlice = createSlice({
  name: 'cookieModal',
  initialState,
  reducers: {
    acceptCookiesModal: (state) => {
      state.content = true;
      setSessionItem('cookieModal', 'true');
    },
    rejectCookiesModal: (state) => {
      state.content = false;
      setSessionItem('cookieModal', 'false');
    },
    resetCookiesModal: (state) => {
      state.content = false;
      removeSessionItem('cookieModal');
    }
  },
});

export const { acceptCookiesModal, rejectCookiesModal, resetCookiesModal } = cookieConsentSlice.actions;
export default cookieConsentSlice.reducer;
