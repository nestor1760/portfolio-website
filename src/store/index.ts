import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import technologySlice from "./technologySlice";
import switcherSlices from "./switcherSlices";
import modalCookieSlice from "./modalCookieSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    technology: technologySlice,
    switcher: switcherSlices,
    modalCookie: modalCookieSlice
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch