import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISkillsItem } from "../types/types";

type TechState = {
  data: ISkillsItem[],
  loading: boolean,
  error: boolean | string,
}

const initialState: TechState = {
  data: [],
  loading: false,
  error: false,
}

const technologySlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    setTechSuccess: (state, action: PayloadAction<ISkillsItem[]>) => {
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

export const {setTechSuccess, setTechError, setTechLoading} = technologySlice.actions;
export default technologySlice.reducer;