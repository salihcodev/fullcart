// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/cart-api-referrers';

// utils:

// SLICE LOGICS::
export const addNewCartItem = createAsyncThunk(`addNewCartItem`, async (itemToAdd: object, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.createNewCartItem(itemToAdd);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
