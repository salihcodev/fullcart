// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/cart-api-referrers';
import delayer from '../../../../common/utilities/delayer.util';

// utils:

// SLICE LOGICS::
// Hookup all cart items:
export const getAllCartItems = createAsyncThunk(`readAllCartItems`, async (options: string, { rejectWithValue }) => {
  try {
    await delayer();

    const { data }: AxiosResponse<any> = await api.fetchAllCartItems(options);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// Check if the prod already in the cart:
export const checkIfItemExisted = createAsyncThunk(`checkIfItemExisted`, async (id: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.checkIfItemExisted(id);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
