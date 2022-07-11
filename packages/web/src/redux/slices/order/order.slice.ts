import { createSlice } from '@reduxjs/toolkit';
import { addNewOrder } from './logic/add.logic';
import { deleteAnOrder } from './logic/delete.logic';
import { getAllOrders } from './logic/read.logic';

// util:

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: any = {
  status: null,
  creationResult: {},
  items: [],
  stage: `idle`,
  message: null,
};

// CREATE THE SLICE::
export const OrderSlice = createSlice({
  name: `OrderSlice`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      // Creat
      .addCase(addNewOrder.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(addNewOrder.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;
        state.creationResult = data;

        state.stage = `idle`;
      })
      .addCase(addNewOrder.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Read
      .addCase(getAllOrders.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(getAllOrders.fulfilled, (state, { payload: { data, message } }: any) => {
        state.message = message;

        state.items = data;

        state.stage = `idle`;
      })
      .addCase(getAllOrders.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      })

      // Delete
      .addCase(deleteAnOrder.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(deleteAnOrder.fulfilled, (state, { payload: { message } }: any) => {
        state.message = message;
        state.stage = `idle`;
      })
      .addCase(deleteAnOrder.rejected, (state, { payload: { message } }: any) => {
        state.message = message;

        state.stage = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE prods-collection REDUCER::
export default OrderSlice.reducer;
