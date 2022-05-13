import { createSlice } from '@reduxjs/toolkit';

// util:
import { LoadSubCategory } from './logic/reading.logic';
import { SliceSubCategoryLoaderTypes } from '../../../common/@types/slice-sub-category-loader.types';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceSubCategoryLoaderTypes = {
  prods: null,
  stage: `idle`,
  failureMsg: null,
};

// CREATE THE SLICE::
export const SubCategoryLoaderSlice = createSlice({
  name: `subCategoryLoader`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      //  PENDING STAGE::
      .addCase(LoadSubCategory.pending, (state) => {
        state.stage = `busy`;
      })

      //  FULFILLED STAGE::
      .addCase(LoadSubCategory.fulfilled, (state, { payload }) => {
        const {
          data: { prods },
        } = payload;

        state.prods = prods;
        state.stage = `idle`;
      })

      //  REJECTION STAGE::
      .addCase(LoadSubCategory.rejected, (state, { payload }) => {
        state.stage = `failed`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE furniture-collection REDUCER::
export default SubCategoryLoaderSlice.reducer;
