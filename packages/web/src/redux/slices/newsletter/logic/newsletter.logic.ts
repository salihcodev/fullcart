// pkgs:
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// utils:
import { NewsletterSubscriptionResponse } from '../../../../common/@types/slice-newsletter-subscription.types';
import * as servicesAPIs from '../../../../api/app-resources/newsletter/endpoints-referrers';

// SLICE LOGICS::
export const mailingListSubscriber = createAsyncThunk(
  `services/newsletterSubscription`,
  async (userEmail: string, { rejectWithValue }) => {
    try {
      await new Promise((res) => setTimeout(res, 500));
      const { data }: AxiosResponse<NewsletterSubscriptionResponse> = await servicesAPIs.subscribeAtMailingList(
        userEmail
      );

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
