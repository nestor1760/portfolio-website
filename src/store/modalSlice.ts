import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModalFormState, ISidebarState } from "./interfaces";

type ModalState = {
  scroll: boolean,
  sidebar: boolean,
  show: boolean
}

const initialState: ModalState = {
  scroll: false,
  sidebar: false,
  show: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<ISidebarState>) => {
      state.sidebar = action.payload.sidebar;
      state.scroll = action.payload.scroll;
    },
    setShow: (state, action: PayloadAction<IModalFormState>) => {
      state.show = action.payload.show
      state.scroll = action.payload.scroll
    }
  },
});

export const { setSidebar, setShow } = modalSlice.actions;
export default modalSlice.reducer;
