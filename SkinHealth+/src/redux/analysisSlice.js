import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  result: null,
  error: null,
};

const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    startAnalysis: (state) => {
      state.loading = true;
      state.error = null;
    },
    analysisSuccess: (state, action) => {
      state.loading = false;
      state.result = action.payload;
    },
    analysisFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearResult: (state) => {
      state.result = null;
    },
  },
});

export const {
  startAnalysis,
  analysisSuccess,
  analysisFailure,
  clearResult,
} = analysisSlice.actions;

export default analysisSlice.reducer;