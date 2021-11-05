// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import * as api from '../../../../api/app-resources/collections/products-api-referrers';

// SLICE LOGICS::
const fetchCategoriesProds = (cat: string) => {
  return createAsyncThunk(cat, async (options: string, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<any> = await api.fetchAllProds(options);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  });
};

const fetchSingleProd = (fetchBy: string) => {
  return createAsyncThunk(
    `getSingleProd/${fetchBy}`,
    async (valueToFetchWith: string, { rejectWithValue }) => {
      try {
        const { data }: AxiosResponse<any> = await api.fetchSingleProd(
          valueToFetchWith
        );
        return data;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );
};

export const GetFurnitureProds = fetchCategoriesProds(`collections/furniture`);
export const LoadSubCategory = fetchCategoriesProds(`subCategoryLoader`);
export const GetSingleProdBySlug = fetchSingleProd(`slugWay`);
export const GetSingleProdById = fetchSingleProd(`idWay`);
