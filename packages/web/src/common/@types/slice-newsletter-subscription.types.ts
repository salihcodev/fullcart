import { LoadStateTypes } from './load-state.types';

export type SliceNewsletterSubscriptionTypes = {
  status: null | `ok` | `failed`;
  stage: LoadStateTypes;
  message: null | string;
};

export type NewsletterSubscriptionResponse = {
  data: { status: string; message: string };
};
