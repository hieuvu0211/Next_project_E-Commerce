import { createSlice } from "@reduxjs/toolkit";

type TInitStateUser<T> = {
  currentUser: T | null;
  isFetching?: boolean;
  error?: boolean;
};

const actionLogin: TInitStateUser<any> = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const appSlice = createSlice({
  name: "auth",
  initialState: {
    actionLogin,
  },
  reducers: {
    loginStart: (state) => {
      state.actionLogin.isFetching = true;
      state.actionLogin.error = false;
    },
    loginSuccess: (state, action) => {
      state.actionLogin.isFetching = false;
      state.actionLogin.currentUser = action.payload;
      state.actionLogin.error = false;
    },
    loginError: (state) => {
      state.actionLogin.isFetching = false;
      state.actionLogin.error = true;
    },
    activeLogOut: (state) => {
      state.actionLogin.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginError, activeLogOut } =
  appSlice.actions;
export default appSlice.reducer;
