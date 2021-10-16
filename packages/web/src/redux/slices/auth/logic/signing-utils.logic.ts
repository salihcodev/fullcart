// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import * as signingAPIControllers from '../../../../api/auth/endpoints-referrers';
import { AuthResponse } from '../../../../common/types/auth.type';
import { SignInFormTypes } from '../../../../common/types/signin-form.types';
import { SignupFormTypes } from '../../../../common/types/signup-form.types';

// SLICE LOGICS::
//

type SigningFormTypes = {
  history: any;
  formData: SignInFormTypes | SignupFormTypes;
};
export const signup = createAsyncThunk(
  `signing/signup`,
  async ({ history, formData }: SigningFormTypes, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<AuthResponse> =
        await signingAPIControllers.signup(formData);

      history.push('/');
      window.location.reload();

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//
//
export const signin = createAsyncThunk(
  `signing/signin`,
  async ({ history, formData }: SigningFormTypes, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<AuthResponse> =
        await signingAPIControllers.signin(formData);

      history.push('/');
      window.location.reload();

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk(`signing/logout`, async () => {
  localStorage.removeItem(`@authedUser`);

  const stageValue = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`idle`);
    }, 1000)
  );

  window.location.reload();
  return stageValue;
});
