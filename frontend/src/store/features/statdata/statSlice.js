import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStats } from "../../../services/api";

const initialState = {
  stat: [],
  loading: false,
  error: null,
};

export const getStatData = createAsyncThunk(
  'getStatData',
    async (params, { rejectWithValue }) => {
      try {
        const result = await getStats();
        if(result.status === 404){
          return [];
        }
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

export const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStatData.fulfilled, (state, action) => {
        state.loading = false;
        state.stat = action.payload;
      })
      .addCase(getStatData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch data.";
      });
  }
});

export default statSlice.reducer;