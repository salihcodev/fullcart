import { createSlice } from '@reduxjs/toolkit';

// util:
import { getFurnitureProds } from './logic/reading.logic';
import { SliceFurnitureTypes } from '../../../../common/@types/slice-prods-collections.types';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceFurnitureTypes = {
  prods: null,
  results: null,
  stage: `idle`,
  failureMsg: null,
};

// CREATE THE SLICE::
export const FurnitureSlice = createSlice({
  name: `collection/furniture`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      .addCase(getFurnitureProds.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getFurnitureProds.fulfilled, (state, { payload }) => {
        const {
          data: { prods },
          results,
        } = payload;

        state.prods = prods;
        state.results = results;
        state.stage = `idle`;
      })
      .addCase(getFurnitureProds.rejected, (state, { payload }) => {
        state.stage = `failed`;
      });
  },
});

// EXPORT THE ACTIONS::
// export const {} = FurnitureSlice.actions;

// EXPORT THE furniture-collection REDUCER::
export default FurnitureSlice.reducer;
