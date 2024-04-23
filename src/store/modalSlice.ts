import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISidebarState } from "./interfaces";

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
  },
});

export const {setSidebar} = modalSlice.actions;
export default modalSlice.reducer;