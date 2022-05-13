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
  failureMsg: { title: null, msg: null },
};

// CREATE THE SLICE::
const AuthSlice = createSlice({
  name: `authSlice`,
  initialState,
  reducers: {
    setStage: (state) => {
      state.stage = `idle`;
    },
  },
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
        const {
          response: {
            data: { message },
          },
        }: any = payload;

        if (state.failureMsg) {
          state.failureMsg.title = `failed to signup`;
          state.failureMsg.msg = message;
        }
        state.stage = `rejected`;
      })
      .addCase(signin.rejected, (state, { payload }) => {
        const {
          response: {
            data: { message },
          },
        }: any = payload;

        if (state.failureMsg) {
          state.failureMsg.title = `failed to signin`;
          state.failureMsg.msg = message;
        }
        state.stage = `rejected`;
      });
  },
});

export const { setStage } = AuthSlice.actions;

export default AuthSlice.reducer;
