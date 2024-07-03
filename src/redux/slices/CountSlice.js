import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
  name: "Count",
  initialState: {
    radius: 0,
  },
  reducers: {
    setRadius: (state, action) => {
      state.radius = action.payload;
    },
  },
});

export const { setRadius } = CountSlice.actions;
export default CountSlice.reducer;
