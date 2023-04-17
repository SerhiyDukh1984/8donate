import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nickName: "",
    password: "",
    isRegister: false,
    isLoggedIn: false,
  },

  reducers: {
    registerUser(state, { payload }) {
      const {
        firstName,
        lastName,
        email,
        phone,
        nickName,
        isRegister,
        isLoggedIn,
        password,
      } = payload;

      return {
        ...state,
        firstName,
        lastName,
        email,
        phone,
        nickName,
        password,
        isRegister,
        isLoggedIn,
      };
    },
    loginUser(state) {
      return { ...state, isLoggedIn: true };
    },
    logoutUser(state) {
      return { ...state, isLoggedIn: false };
    },
    deletetUser() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nickName: "",
        password: "",
        isRegister: false,
        isLoggedIn: false,
      };
    },
  },
});

export default authSlice.reducer;
export const { registerUser, logoutUser, loginUser, deletetUser } =
  authSlice.actions;
