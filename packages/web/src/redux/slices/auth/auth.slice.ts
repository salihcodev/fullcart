// pgs:
import { createSlice } from '@reduxjs/toolkit';

// utils:
import { signup, signin, logout } from './logic/signing-utils.logic';
import setDataToLocalStorage from '../../../common/utilities/localstorage-dealer/localstorage-setter.util';
import { SliceAuthStateTypes } from '../../../common/@types/slice-auth.types';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceAuthStateTypes = {
  user: null,
  accessToken: null,
  stage: `idle`,
  failureMsg: null,
};

// CREATE THE SLICE::
const authSlice = createSlice({
  name: `authSlice`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // logout

      // pending stage::
      .addCase(logout.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(signup.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(signin.pending, (state) => {
        state.stage = `busy`;
      })

      // fulfilled stage::
      .addCase(logout.fulfilled, (state, { payload }: any) => {
        state.stage = payload;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const {
          data: { accessToken, user },
          data,
        }: any = payload;

        state.user = user;
        state.accessToken = accessToken;
        setDataToLocalStorage(`@authedUser`, data);
        state.stage = `idle`;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        const {
          data: { accessToken, user },
          data,
        }: any = payload;

        state.user = user;
        state.accessToken = accessToken;
        setDataToLocalStorage(`@authedUser`, data);
        state.stage = `idle`;
      })

      // rejection stage
      .addCase(signup.rejected, (state, { payload }) => {
        state.stage = `failed`;
        state.failureMsg = `failed to signup , ${payload}`;
      })
      .addCase(signin.rejected, (state, { payload }) => {
        state.stage = `failed`;
        state.failureMsg = `failed to signin , ${payload}`;
      });
  },
});

export default authSlice.reducer;
