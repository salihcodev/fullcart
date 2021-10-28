// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import * as api from '../../../../../api/app-resources/collections/products-api-referrers';

// SLICE LOGICS::

const fetchCategoriesProds = (cat: string) => {
  return createAsyncThunk(
    `collections/${cat}`,
    async (options: string, { rejectWithValue }) => {
      try {
        const { data }: AxiosResponse<any> = await api.fetchAllProds(options);
        return data;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );
};

export const getFurnitureProds = fetchCategoriesProds(`furniture`);
