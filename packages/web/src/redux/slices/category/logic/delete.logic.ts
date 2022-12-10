// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/category-api-referrers';

// utils:

// SLICE LOGICS::

// CATEGORY:
export const deleteCategory = createAsyncThunk(`deleteCategory`, async (id: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.deleteCategory(`category`, id);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// SUBCATEGORY:
export const deleteSubCategory = createAsyncThunk(`deleteSubCategory`, async (id: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.deleteCategory(`subcategory`, id);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
