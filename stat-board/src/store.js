import { configureStore } from "@reduxjs/toolkit";
import statSlice from "./feature/statBoard/statSlice";

const store = configureStore({
  reducer: {
    stats: statSlice,
  },
});

export default store;
