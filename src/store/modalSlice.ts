import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISidebarState } from "../types/types";

type ModalState = {
  scroll: boolean,
  sidebar: boolean,
}

const initialState: ModalState = {
  scroll: false,
  sidebar: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<ISidebarState>) => {
      state.sidebar = action.payload.sidebar;
      state.scroll = action.payload.scroll;
    },
    setToggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
      state.scroll = !state.scroll;
    }
  },
});

export const {setSidebar, setToggleSidebar} = modalSlice.actions;
export default modalSlice.reducer;