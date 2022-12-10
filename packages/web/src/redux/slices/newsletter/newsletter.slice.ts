import { createSlice } from '@reduxjs/toolkit';
import { SliceNewsletterSubscriptionTypes } from '../../../common/@types/slice-newsletter-subscription.types';
import { mailingListSubscriber } from './logic/newsletter.logic';

// util:

// CONFIGURE THE INITIAL STATE OF THE SLICE::
const initialState: SliceNewsletterSubscriptionTypes = {
  status: null,
  stage: `idle`,
  message: null,
};

// CREATE THE SLICE::
export const newsletterSubscription = createSlice({
  name: `newsletterSubscription`,
  initialState,
  reducers: {},

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      .addCase(mailingListSubscriber.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(mailingListSubscriber.fulfilled, (state, { payload: { status, message } }: any) => {
        state.message = message;
        state.status = status;

        state.stage = `idle`;
      })
      .addCase(mailingListSubscriber.rejected, (state, { payload: { status, message } }: any) => {
        state.message = message;
        state.status = status;

        state.stage = `rejected`;
      });
  },
});

// EXPORT THE ACTIONS::

// EXPORT THE prods-collection REDUCER::
export default newsletterSubscription.reducer;
