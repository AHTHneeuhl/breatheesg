import { createSlice } from "@reduxjs/toolkit";
import { IBusinessUnit } from "../../../adapters/types";

const initialState = {
  units: [] as IBusinessUnit[],
};

export const units = createSlice({
  name: "units",
  initialState,
  reducers: {
    setBusinessUnits: (state, action) => {
      state.units = action.payload;
    },
  },
});

export const { setBusinessUnits } = units.actions;

export default units.reducer;
