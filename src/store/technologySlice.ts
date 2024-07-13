import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TItem } from "../data/interface";
import { TechState } from "./interfaces";


const initialState: TechState = {
  data: [],
  loading: false,
  error: false,
}

const technologySlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    setTechSuccess: (state, action: PayloadAction<TItem[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    setTechLoading: (state) => {
      state.data = [];
      state.loading = true;
      state.error = false;
    },
    setTechError: (state, action: PayloadAction<string | boolean>) => {
      state.data = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setTechSuccess, setTechError, setTechLoading } = technologySlice.actions;
export default technologySlice.reducer;