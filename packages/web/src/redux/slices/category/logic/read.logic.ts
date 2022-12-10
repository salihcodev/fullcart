// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as api from '../../../../api/app-resources/collections/category-api-referrers';

// utils:

// SLICE LOGICS::

// GET ALL AS ACOMPUTED ARRAY:
export const getAllCategoriesComputed = createAsyncThunk(`readAllCategories`, async (_, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.fetchAllCategoriesComputed();
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// CATEGORY:
export const getAllMainCategories = createAsyncThunk(`readAllCategories`, async (options: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.fetchAllCategories(`category`, options);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getCategoryById = createAsyncThunk(`getCategoryById`, async (id: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.fetchCategoryById(`category`, id);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// SUBCATEGORY:
export const getAllSubCategories = createAsyncThunk(`readAllSubCategories`, async (options: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.fetchAllCategories(`subcategory`, options);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getSubCategoryById = createAsyncThunk(`getSubCategoryById`, async (id: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<any> = await api.fetchCategoryById(`subcategory`, id);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
