// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../api/app-resources/collections/utiles/wipe';

// utils:

// SLICE LOGICS::
export const dropCollection = createAsyncThunk(`dropCollection`, async (collection: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.dropCollection(collection);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
