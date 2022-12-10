// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/cart-api-referrers';

// utils:

// SLICE LOGICS::
export const deleteCartItem = createAsyncThunk(
  `deleteCartItem`,
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<any> = await api.deleteCartItem(id);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
