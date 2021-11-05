import { createSlice } from '@reduxjs/toolkit';

// util:
import { GetSingleProdBySlug } from './logic/reading.logic';
import { SliceSingleCategoryTypes } from '../../../common/@types/slice-single-category.types';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceSingleCategoryTypes = {
  prod: null,
  stage: `idle`,
  failureMsg: null,
};

// CREATE THE SLICE::
export const SingleProdGetterSlice = createSlice({
  name: `getSingleProd`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      //  PENDING STAGE::
      .addCase(GetSingleProdBySlug.pending, (state) => {
        state.stage = `busy`;
      })

      //  FULFILLED STAGE::
      .addCase(GetSingleProdBySlug.fulfilled, (state, { payload }) => {
        const {
          data: { prod },
        } = payload;

        state.prod = prod;
        state.stage = `idle`;
      })

      //  REJECTION STAGE::
      .addCase(GetSingleProdBySlug.rejected, (state, { payload }) => {
        state.stage = `failed`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE furniture-collection REDUCER::
export default SingleProdGetterSlice.reducer;
