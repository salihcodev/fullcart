import { localStorageObjGetter } from './../../../common/utilities/localstorage-dealer/localstorage-getters.util';
import { createSlice } from '@reduxjs/toolkit';

// util:
import { GetSingleProdBySlug } from './logic/reading.logic';
import { SliceSingleCategoryTypes } from '../../../common/@types/slice-single-category.types';
import setDataToLocalStorage from '../../../common/utilities/localstorage-dealer/localstorage-setter.util';

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
  reducers: {
    increaseProdCount: (state) => {
      if (state.prod?.count) state.prod.count += 1;
      setDataToLocalStorage(`@singleProd`, state.prod);
    },
    decreaseProdCount: (state) => {
      if (state.prod?.count && state.prod?.count > 1) state.prod.count -= 1;
      setDataToLocalStorage(`@singleProd`, state.prod);
    },
    setProdCount: (state, action) => {
      if (state.prod?.count && state.prod?.count > 1) state.prod.count = action.payload;
      setDataToLocalStorage(`@singleProd`, state.prod);
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
        const {
          data: { prod },
        } = payload;

        const _prod = { ...prod, count: prod?.minimumOrder };
        state.prod = _prod;

        state.stage = `idle`;
      })

      //  REJECTION STAGE::
      .addCase(GetSingleProdBySlug.rejected, (state, { payload }) => {
        state.stage = `failed`;
      });
  },
});

// EXPORT THE ACTIONS::
export const { increaseProdCount, decreaseProdCount, setProdCount } = SingleProdGetterSlice.actions;

export default SingleProdGetterSlice.reducer;
