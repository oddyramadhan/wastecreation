import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: null,
    password: null,
    token: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeLogin: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
    setIslogin: (state) => {
      state.token = "token";
    },
  },
});

export const { setLogin, removeLogin, setIslogin } = loginSlice.actions;

export default loginSlice.reducer;
