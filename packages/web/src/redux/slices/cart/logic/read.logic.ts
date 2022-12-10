// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/cart-api-referrers';
import delayer from '../../../../common/utilities/delayer.util';

// utils:

// SLICE LOGICS::
export const getAllCartItems = createAsyncThunk(`readAllCartItems`, async (options: string, { rejectWithValue }) => {
  try {
    await delayer();

    const { data }: AxiosResponse<any> = await api.fetchAllCartItems(options);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
