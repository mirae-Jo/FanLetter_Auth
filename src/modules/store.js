import letterReducer from "./memberLetterSlice.config.js";
import authReducer from "./authSlice.config.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    letterReducer,
    authReducer,
  },
});

export default store;

// 멤버편지를 전역으로 관리
// 로그인정보 전역으로 관리
