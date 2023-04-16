import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

export const businessGroups = createSlice({
  name: "businessGroups",
  initialState,
  reducers: {
    setBusinessGroups: (state, action) => {
      state.groups = action.payload;
    },
  },
});

export const { setBusinessGroups } = businessGroups.actions;

export default businessGroups.reducer;
