import { combineReducers } from "@reduxjs/toolkit";
import groups from "./groups";

export default combineReducers({
  groups,
});

export * from "./groups";
