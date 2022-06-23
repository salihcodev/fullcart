// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:

// SLICE LOGICS::
export const mailSender = createAsyncThunk(`customerActions/addProdToCart`, async (tttt, { rejectWithValue }) => {
  try {
    // const { data }: AxiosResponse<any> =
    // await servicesAPIs
    // return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
