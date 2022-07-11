import { createSlice } from '@reduxjs/toolkit';
import { addNewWishlistItem } from './logic/add.logic';
import { deleteWishlistItem } from './logic/delete.logic';
import { getAllWishlistItems } from './logic/read.logic';

// util:

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: any = {
  status: null,
  creationResult: {},
  items: [],
  stage: `idle`,
  stageForDrop: `idle`,
  message: null,
};

// CREATE THE SLICE::
export const WishlistSlice = createSlice({
  name: `WishlistSlice`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      // Creat
      .addCase(addNewWishlistItem.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(addNewWishlistItem.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.creationResult = data;

        state.stage = `idle`;
      })
      .addCase(addNewWishlistItem.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Read
      .addCase(getAllWishlistItems.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getAllWishlistItems.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.items = data;

        state.stage = `idle`;
      })
      .addCase(getAllWishlistItems.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Delete
      .addCase(deleteWishlistItem.pending, (state) => {
        state.stageForDrop = `busy`;
      })
      .addCase(deleteWishlistItem.fulfilled, (state, { payload: { message } }: any) => {
        state.message = message;
        state.stageForDrop = `idle`;
      })
      .addCase(deleteWishlistItem.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stageForDrop = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE prods-collection REDUCER::
export default WishlistSlice.reducer;
