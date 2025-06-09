import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCertificates } from "../../../services/api";

const initialState = {
  certificate: [],
  loading: false,
  error: null,
};

export const getCertificateData = createAsyncThunk(
  'getCertificateData',
    async (params, { rejectWithValue }) => {
      try {
        const result = await getCertificates(params);
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

export const certificateSlice = createSlice({
  name: "certificate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCertificateData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCertificateData.fulfilled, (state, action) => {
        state.loading = false;
        state.certificate = action.payload;
      })
      .addCase(getCertificateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch data.";
      });
  }
});

export default certificateSlice.reducer;