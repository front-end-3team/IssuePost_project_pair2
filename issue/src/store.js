import { configureStore } from "@reduxjs/toolkit";
import issueSlice from "issueSlice";

export const store = configureStore({
  reducer: {
    getIssue: issueSlice.reducer,
  },
});
