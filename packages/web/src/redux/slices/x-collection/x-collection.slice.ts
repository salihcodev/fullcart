import { createSlice } from '@reduxjs/toolkit';

// util:
import { getAllXs } from './logic/crud.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: any = {
  entities: [],
  stage: `idle`,
  failureMsg: null,
};

// CREATE THE SLICE::
export const XCollection = createSlice({
  name: `x-collection`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      .addCase(getAllXs.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getAllXs.fulfilled, (state, { payload }) => {
        state.stage = `idle`;
      })
      .addCase(getAllXs.rejected, (state, { payload }) => {
        state.stage = `failed`;
      });
  },
});

// EXPORT THE ACTIONS::
// export const {} = XCollection.actions;

// EXPORT THE doors-collection REDUCER::
export default XCollection.reducer;
