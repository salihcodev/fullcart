import { createSlice } from '@reduxjs/toolkit';

// util:
import { GetSingleProdBySlug } from './logic/reading.logic';
import { SliceSingleCategoryTypes } from '../../../common/@types/slice-single-category.types';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceSingleCategoryTypes = {
  prod: null,
  stage: `idle`,
  count: 1,
  failureMsg: null,
};

// CREATE THE SLICE::
export const SingleProdGetterSlice = createSlice({
  name: `getSingleProd`,
  initialState,
  reducers: {
    increaseProdCount: (state) => {
      if (state.count) state.count += 1;
    },
    decreaseProdCount: (state) => {
      if (state.count > 1) state.count -= 1;
    },
    setProdCount: (state, action) => {
      state.count = action.payload;
    },
  },

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      //  PENDING STAGE::
      .addCase(GetSingleProdBySlug.pending, (state) => {
        state.stage = `busy`;
      })

      //  FULFILLED STAGE::
      .addCase(GetSingleProdBySlug.fulfilled, (state, { payload }) => {
        const { data } = payload;

        const _prod = { ...data, count: data?.minimumOrder };
        state.prod = _prod;

        state.stage = `idle`;
      })

      //  REJECTION STAGE::
      .addCase(GetSingleProdBySlug.rejected, (state, { payload }) => {
        state.stage = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::
export const { increaseProdCount, decreaseProdCount, setProdCount } = SingleProdGetterSlice.actions;

export default SingleProdGetterSlice.reducer;
