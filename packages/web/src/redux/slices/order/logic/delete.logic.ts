// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/orders-api-referrers';

// utils:

// SLICE LOGICS::
export const deleteAnOrder = createAsyncThunk(`deleteOrder`, async (id: string | undefined, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.deleteAnOrder(id);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
