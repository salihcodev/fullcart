// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/category-api-referrers';

// utils:

// SLICE LOGICS::
// CATEGORY:
export const addNewCategory = createAsyncThunk(`addNewCategory`, async (catToAdd: object, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.createNewCategory(`category`, catToAdd);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// SUBCATEGORY:
export const addNewSubCategory = createAsyncThunk(`addNewSubCategory`, async (catToAdd: object, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.createNewCategory(`subcategory`, catToAdd);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
