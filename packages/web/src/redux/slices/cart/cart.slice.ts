import { createSlice } from '@reduxjs/toolkit';

// util:
import { mailSender } from './logic/add.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: any = {
  status: null,
  stage: `idle`,
  message: null,
};

// CREATE THE SLICE::
export const CartSlice = createSlice({
  name: `CartSlice`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      .addCase(mailSender.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(mailSender.fulfilled, (state, { payload: { status, message } }: any) => {
        state.message = message;
        state.status = status;

        state.stage = `idle`;
      })
      .addCase(mailSender.rejected, (state, { payload: { status, message } }: any) => {
        state.message = message;
        state.status = status;

        state.stage = `failed`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE prods-collection REDUCER::
export default CartSlice.reducer;
