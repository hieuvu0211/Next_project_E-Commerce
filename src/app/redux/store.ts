import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./authSlice";
import { useDispatch } from "react-redux";
import userSliceReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: appSliceReducer,
    user: userSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
