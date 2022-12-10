// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/orders-api-referrers';

// utils:

// SLICE LOGICS::
export const addNewOrder = createAsyncThunk(`addNewOrderItem`, async (itemToAdd: object, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.createNewOrder(itemToAdd);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
