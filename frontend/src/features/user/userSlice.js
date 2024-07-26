import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    isAuthenticate: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticate = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      state.isAuthenticate = true;
      state.userInfo = action.payload;
    },
  },
});

export const {login,logout,register} = userSlice.actions;
export default userSlice.reducer;