import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

export const groups = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setgroups: (state, action) => {
      state.groups = action.payload;
    },
  },
});

export const { setgroups } = groups.actions;

export default groups.reducer;
