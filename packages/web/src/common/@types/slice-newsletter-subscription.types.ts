export type SliceNewsletterSubscriptionTypes = {
  status: null | `ok` | `failed`;
  stage: `idle` | `busy` | `failed`;
  message: null | string;
};

export type NewsletterSubscriptionResponse = {
  data: { status: string; message: string };
};
