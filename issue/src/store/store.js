import { configureStore } from "@reduxjs/toolkit";
import issueSlice from "reducer/issueSlice";

export const store = configureStore({
  reducer: {
    getIssue: issueSlice.reducer,
  },
});
