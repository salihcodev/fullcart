import { createSlice } from '@reduxjs/toolkit';
import { ProdsCollectionTypes } from '../../../common/@types/slice-prods-collections.types';
import { GetCollectionOfProds } from './logic/reading.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: ProdsCollectionTypes = {
  prods: [],
  stage: `idle`,
  count: null,
  failureMsg: null,
};

// CREATE THE SLICE::
export const ProdsCollectionSlice = createSlice({
  name: `prods-collection`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      //  PENDING STAGE::
      .addCase(GetCollectionOfProds.pending, (state) => {
        state.stage = `busy`;
      })

      //  FULFILLED STAGE::
      .addCase(GetCollectionOfProds.fulfilled, (state, { payload }) => {
        const { data, count } = payload;

        state.prods = data;
        state.count = count;

        state.stage = `idle`;
      })

      //  REJECTION STAGE::
      .addCase(GetCollectionOfProds.rejected, (state, { payload }) => {
        state.stage = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE furniture-collection REDUCER::
export default ProdsCollectionSlice.reducer;
