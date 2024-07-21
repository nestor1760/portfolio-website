import { createSlice } from "@reduxjs/toolkit";
import { IModalCookieState } from "./interfaces";
import { cookieFunction } from "../components/General/Components/Cookie/utills";

const { getCookie, setCookieModal, setAcceptCookie } = cookieFunction()

const getModalValueFromCookies = () => {
  const modalCookie = getCookie('cookieModal')
  return modalCookie === 'true' ? true : false
}

const getСonsentFromCookies = () => {
  const consent = getCookie('acceptCookie')
  return consent === 'true' ? true : false
}

const initialState: IModalCookieState = {
  modalCookie: getModalValueFromCookies(),
  consent: getСonsentFromCookies(),
}

const modalCookieSlice = createSlice({
  name: 'modalCookie',
  initialState,
  reducers: {
    closeModalAndAcceptCookie: (state) => {
      state.modalCookie = false;
      state.consent = true;
      setAcceptCookie(state.consent.toString())
      setCookieModal(state.modalCookie.toString())
    },
    closeModalAndRejectCookie: (state) => {
      state.modalCookie = false;
      state.consent = false;
      setAcceptCookie(state.consent.toString())
      setCookieModal(state.modalCookie.toString())
    },
    showModalCookie: (state) => {
      state.modalCookie = true;
      state.consent = false;
      setCookieModal(state.modalCookie.toString())
      setCookieModal(state.modalCookie.toString())
    }
  },
});

export const { closeModalAndAcceptCookie, closeModalAndRejectCookie, showModalCookie } = modalCookieSlice.actions;
export default modalCookieSlice.reducer;
