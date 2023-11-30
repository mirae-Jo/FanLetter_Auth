import { createSlice } from "@reduxjs/toolkit";
// 초기값
const initialState = {
  letters: [],
};
// 리듀서
const letterSlice = createSlice({
  name: "Letter",
  initialState,
  //   cud
  reducers: {
    createLetter: () => {},
    updateLetter: () => {},
    deleteLetter: () => {},
  },
});

export const { createLetter, updateLetter, deleteLetter } = letterSlice.actions;

export default letterSlice.reducer;
