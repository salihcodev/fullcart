// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import * as api from '../../../../../api/app-resources/collections/categories-api-referrers';

// SLICE LOGICS::
export type toFetchTypes = { category: string; filterOptions: string };

const fetchCategoriesProds = (cat: string) => {
  return createAsyncThunk(
    `collections/${cat}`,
    async ({ category, filterOptions }: toFetchTypes, { rejectWithValue }) => {
      try {
        const { data }: AxiosResponse<any> = await api.fetchAllProds(
          category,
          filterOptions
        );
        return data;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );
};

export const getFurnitureProds = fetchCategoriesProds(`furniture`);
