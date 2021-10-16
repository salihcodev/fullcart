// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
// utils:
import * as doorAPIControllers from '../../../../api/comps/x-collection/endpoints-referrers';

// SLICE LOGICS::
export const getAllXs = createAsyncThunk(
  `x-collection/getAll`,
  async (page: number, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<any> =
        await doorAPIControllers.fetchAllDoors(page);

      return data;
    } catch (err) {
      // this error message gonna be returned to the `action.payload`
      return rejectWithValue(err);
    }
  }
);
