import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getIssue = createAsyncThunk("issueSlice/getIssue", async () => {
  const res = await axios.get(process.env.REACT_APP_BACKEND_URL);
  return res.data;
});

const initialState = {
  issues: [],
  status: null,
};

const issueSlice = createSlice({
  name: "issueSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIssue.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getIssue.fulfilled, (state, action) => {
      state.status = "success";
      state.issues.push(...action.payload);
    });
    builder.addCase(getIssue.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default issueSlice;
export { getIssue };
