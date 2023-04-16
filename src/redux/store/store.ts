import { configureStore } from "@reduxjs/toolkit";
import business from "../slices/business";

export const store = configureStore({
  reducer: {
    business,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
