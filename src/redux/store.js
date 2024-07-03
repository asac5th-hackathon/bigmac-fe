import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./slices/CountSlice";

const store = configureStore({
  reducer: {
    Count: CountReducer,
  },
});

export default store;
