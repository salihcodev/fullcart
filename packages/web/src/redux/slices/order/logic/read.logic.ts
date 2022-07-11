// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/orders-api-referrers';

// utils:

// SLICE LOGICS::
export const getAllOrders = createAsyncThunk(`readAllOrders`, async (options: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.fetchAllOrders(options);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
