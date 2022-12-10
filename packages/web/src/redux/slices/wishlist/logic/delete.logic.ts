// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/wishlist-api-referrers';

// utils:

// SLICE LOGICS::
export const deleteWishlistItem = createAsyncThunk(
  `deleteWishlistItem`,
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<any> = await api.deleteWishlistItem(id);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
