// util:
import { createSlice } from '@reduxjs/toolkit';
import { dropCollection } from '../collection-utils/wipe.logic';
import { addNewCartItem } from './logic/add.logic';
import { deleteCartItem } from './logic/delete.logic';
import { getAllCartItems } from './logic/read.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: any = {
  status: null,
  creationResult: {},
  items: [],
  stage: `idle`,
  message: null,
  stageForDrop: `idle`,
};

// CREATE THE SLICE::
export const CartSlice = createSlice({
  name: `CartSlice`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      // Creat
      .addCase(addNewCartItem.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(addNewCartItem.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.creationResult = data;

        state.stage = `idle`;
      })
      .addCase(addNewCartItem.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Read
      .addCase(getAllCartItems.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getAllCartItems.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.items = data;

        state.stage = `idle`;
      })
      .addCase(getAllCartItems.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Delete
      .addCase(deleteCartItem.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(deleteCartItem.fulfilled, (state, { payload: { message } }: any) => {
        state.message = message;
        state.stage = `idle`;
      })
      .addCase(deleteCartItem.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })
      .addCase(dropCollection.pending, (state) => {
        state.stageForDrop = `busy`;
      })
      .addCase(dropCollection.fulfilled, (state, { payload: { message } }: any) => {
        state.message = message;
        state.stageForDrop = `idle`;
      })
      .addCase(dropCollection.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stageForDrop = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE prods-collection REDUCER::
export default CartSlice.reducer;
