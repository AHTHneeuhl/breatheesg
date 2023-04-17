import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
};

export const units = createSlice({
  name: "units",
  initialState,
  reducers: {
    setunits: (state, action) => {
      state.units = action.payload;
    },
  },
});

export const { setunits } = units.actions;

export default units.reducer;
