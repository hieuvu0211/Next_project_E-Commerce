import { createSlice } from "@reduxjs/toolkit";

type CartInfo = {
  name: string;
};
const cartInfo: CartInfo = {
  name: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartInfo,
  },
  reducers: {
    deleteUser: (state) => {},
    getAllUsers: (state, action) => {
      state.cartInfo.name = action.payload;
    },
  },
});

export const { deleteUser, getAllUsers } = cartSlice.actions;
export default cartSlice.reducer;
