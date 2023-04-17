import { createSlice } from "@reduxjs/toolkit";
import { IBusinessGroup } from "../../../adapters/types";

const initialState = {
  groups: [] as IBusinessGroup[],
};

export const groups = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setBusinessGroups: (state, action) => {
      state.groups = action.payload;
    },
  },
});

export const { setBusinessGroups } = groups.actions;

export default groups.reducer;
