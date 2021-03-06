import { createSlice } from '@reduxjs/toolkit';

// util:
import { GetCollectionOfProds } from './logic/reading.logic';
import { ProdsCollectionTypes } from '../../../common/@types/slice-prods-collections.types';
import { categorizeSubCategories } from './logic/categorize-sub-categories.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: ProdsCollectionTypes = {
  prods: null,
  subProds: null,
  stage: `idle`,
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
        const {
          data: { prods },
        } = payload;

        state.prods = prods;
        state.subProds = categorizeSubCategories(prods);

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
