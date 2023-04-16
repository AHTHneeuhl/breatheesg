import { combineReducers } from "@reduxjs/toolkit";
import businessGroups from "./businessGroups";

export default combineReducers({
  businessGroups,
});

export * from "./businessGroups";
