import { createSlice } from "@reduxjs/toolkit";
import { getSessionItem, removeSessionItem, setSessionItem } from "./utills";
import { TCookieConsentState } from "./interfaces";

const initialState: TCookieConsentState = {
  content: (getSessionItem('cookieModal') === 'false' ? false : true),
};

const cookieConsentSlice = createSlice({
  name: 'cookieModal',
  initialState,
  reducers: {
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

export const { rejectCookiesModal, resetCookiesModal } = cookieConsentSlice.actions;
export default cookieConsentSlice.reducer;
