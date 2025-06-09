import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactions } from "../../../services/api";

const initialState = {
  transaction: [],
  loading: false,
  error: null,
};

export const getTransactionData = createAsyncThunk(
  'getTransactionData',
    async (params, { rejectWithValue }) => {
      try {
        const result = await getTransactions(params);
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

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionData.fulfilled, (state, action) => {
        state.loading = false;
        state.transaction = action.payload;
      })
      .addCase(getTransactionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch data.";
      });
  }
});

export default transactionSlice.reducer;