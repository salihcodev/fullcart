import { createSlice } from '@reduxjs/toolkit';

// util:
import { getFurnitureProds } from './logic/reading.logic';
import { SliceFurnitureTypes } from '../../../common/@types/slice-prods-collections.types';
import { categorizeSubCategories } from './logic/categorize-sub-categories.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceFurnitureTypes = {
  prods: null,
  subProds: null,
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
      //  PENDING STAGE::
      .addCase(getFurnitureProds.pending, (state) => {
        state.stage = `busy`;
      })

      //  FULFILLED STAGE::
      .addCase(getFurnitureProds.fulfilled, (state, { payload }) => {
        const {
          data: { prods },
        } = payload;

        state.prods = prods;
        state.subProds = categorizeSubCategories(prods);

        state.stage = `idle`;
      })

      //  REJECTION STAGE::
      .addCase(getFurnitureProds.rejected, (state, { payload }) => {
        state.stage = `failed`;
      });
  },
});

// EXPORT THE ACTIONS::
// export const {} = FurnitureSlice.actions;

// EXPORT THE furniture-collection REDUCER::
export default FurnitureSlice.reducer;
