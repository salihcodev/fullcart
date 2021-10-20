// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import * as api from '../../../../../api/app-resources/collections/categories-api-referrers';

// SLICE LOGICS::
export const getFurnitureProds = createAsyncThunk(
  `collections/getFurnitureProds`,
  async (category: string = `furniture`, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<any> = await api.fetchAllProds(category);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// TODO: make a util function that make the above async function logic.
