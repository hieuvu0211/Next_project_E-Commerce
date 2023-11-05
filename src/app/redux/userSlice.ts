import { createSlice } from "@reduxjs/toolkit";

type TUserInfo = {
    Alluser: any;
}
const initUserInfo: TUserInfo = {
    Alluser: ''
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        initUserInfo
    },
    reducers: {
        deleteUser: (state) => {

        },
        getAllUsers: (state, action) => {
            state.initUserInfo.Alluser = action.payload;
        }
    }
});

export const {deleteUser, getAllUsers} = userSlice.actions;
export default userSlice.reducer;