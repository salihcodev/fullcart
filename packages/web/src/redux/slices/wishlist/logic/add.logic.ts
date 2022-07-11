// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/wishlist-api-referrers';

// utils:

// SLICE LOGICS::
export const addNewWishlistItem = createAsyncThunk(
  `addNewWishlistItem`,
  async (itemToAdd: object, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<any> = await api.createNewWishlistItem(itemToAdd);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
