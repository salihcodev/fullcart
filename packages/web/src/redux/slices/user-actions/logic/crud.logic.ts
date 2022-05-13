// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import * as signingAPIControllers from '../../../../api/auth/endpoints-referrers';
import { AuthResponse } from '../../../../common/@types/auth.type';

// SLICE LOGICS::
//

type GetUserInfoTypes = {
  role: `customer` | `suppler`;
  id: string;
  fields?: string | undefined;
};
export const getInfo = createAsyncThunk(
  `userActions/getUserInfo`,
  async ({ role, id, fields }: GetUserInfoTypes, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<AuthResponse> = await signingAPIControllers.fetchInfo(role, id, fields);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
