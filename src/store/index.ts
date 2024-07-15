import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import technologySlice from "./technologySlice";
import switcherSlices from "./switcherSlices";


const store = configureStore({
  reducer: {
    modal: modalSlice,
    technology: technologySlice,
    switcher: switcherSlices,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch