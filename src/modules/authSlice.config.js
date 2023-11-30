import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// 초기값
const initialState = {
  userId: null,
  avatar: null,
  nickname: "",
  accessToken: null,

  isSignupLoading: false,
  isSignupError: false,
  signupError: false,
  isSignupSuccess: false,
};

// redux에서는 비동기통신을 위해
// redux thunk 사용

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (payload, thunkAPI) => {
    // 비동기통신
    const response = await axios.post(
      process.env.REACT_APP_AUTH_URL + "/register",
      {
        id: payload.id,
        password: payload.password,
        nickname: payload.nickname,
      }
    );
    if (response.data.success) {
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    // 비동기통신
    try {
      const response = await axios.post(
        process.env.REACT_APP_AUTH_URL + "/register",
        {
          id: payload.id,
          password: payload.password,
        }
      );
      const { accessToken, userId, success, avatar, nickname } = response.data;

      if (success) {
        thunkAPI.fulfillWithValue({ accessToken, userId, avatar, nickname });
        return;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

// 리듀서
const authSlice = createSlice({
  name: "auth",
  initialState,
  //   cud
  reducers: {},
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.isSignupLoading = true;
      state.isSignupError = false;
      state.signupError = null;
      state.isSignupSuccess = false;
    },
    [loginThunk.fulfilled]: (state, action) => {
      const { accessToken, userId, avatar, nickname } = action.payload;
      state.accessToken = accessToken;
      state.userId = userId;
      state.avatar = avatar;
      state.nickname = nickname;

      state.isSignupLoading = false;
      state.isSignupError = false;
      state.signupError = null;
      state.isSignupSuccess = true;

      return state;
    },
    [loginThunk.rejected]: (state, action) => {
      state.isSignupLoading = false;
      state.isSignupError = true;
      state.signupError = action.payload.message;
      state.isSignupSuccess = false;
    },
  },
});

export const selectUserId = (state) => state.authReducer.userId;
export const selectSignupAsyncState = (store) => {
  const { isSignupError, isSignupLoading, signupError, isSignupSuccess } =
    store.authReducer;
  return { isSignupError, isSignupLoading, signupError, isSignupSuccess };
};

export default authSlice.reducer;
