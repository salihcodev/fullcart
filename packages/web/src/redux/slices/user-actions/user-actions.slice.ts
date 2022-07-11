// pgs:
import { createSlice } from '@reduxjs/toolkit';

// utils:
import { getInfo } from './logic/crud.logic';
import { SliceUserActionsTypes } from '../../../common/@types/slice-user-actions.types';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceUserActionsTypes = {
  userData: null,
  stage: `idle`,
  failureMsg: null,
};

// CREATE THE SLICE::
const UserActionsSlice = createSlice({
  name: `userActions`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // pending stage::
      .addCase(getInfo.pending, (state) => {
        state.stage = `busy`;
      })

      // fulfilled stage::
      .addCase(getInfo.fulfilled, (state, { payload }) => {
        const { data }: any = payload;

        state.userData = data;
        state.stage = `idle`;
      })

      // rejection stage
      .addCase(getInfo.rejected, (state, { payload }) => {
        state.stage = `rejected`;
        state.failureMsg = `failed to signin , ${payload}`;
      });
  },
});

export default UserActionsSlice.reducer;
