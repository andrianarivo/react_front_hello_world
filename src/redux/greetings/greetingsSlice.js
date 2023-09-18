import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greetingData: {},
  loading: true,
  error: false,
  errMsg: '',
};

const getGreeting = createAsyncThunk('greetings/getGreeting', async ({ url }, thunkAPI) => {
  try {
    const axiosInstance = axion.create({
      headers: { "content-type": "application/json"}
    })
    const resp = await axiosInstance.get(url);
    console.log(resp);
    return resp.data;
  } catch (e) {
    console.error(e);
    return thunkAPI.rejectWithValue(`API call error ${e.message}`);
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greetingData = action.payload;
      })
      .addCase(getGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errMsg = action.payload;
      });
  },
});

export { getGreeting };

export default greetingsSlice.reducer;