import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slicer";

const initialState = {
  email: localStorage.getItem("email"),
  password: localStorage.getItem("password"),
  token: localStorage.getItem("token"),
};

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
  preloadedState: {
    login: initialState,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  if (store.getState().login.email !== null)
    localStorage.setItem("email", store.getState().login.email);
  if (store.getState().login.password !== null)
    localStorage.setItem("password", store.getState().login.password);
  if (store.getState().login.token !== null)
    localStorage.setItem("token", store.getState().login.token);
});
export default store;
