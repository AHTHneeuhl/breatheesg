import { combineReducers } from "@reduxjs/toolkit";
import groups from "./groups";
import units from "./units";

export default combineReducers({
  groups,
  units,
});

export * from "./groups";
export * from "./units";
