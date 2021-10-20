import { createSlice } from '@reduxjs/toolkit';
import { SliceContactUsTypes } from '../../../common/@types/slice-contact-us.types';

// util:
import { mailSender } from './logic/mail-sender.logic';

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceContactUsTypes = {
  status: null,
  stage: `idle`,
  message: null,
};

// CREATE THE SLICE::
export const ContactUsSlice = createSlice({
  name: `ContactUsSlice`,
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
export default ContactUsSlice.reducer;
