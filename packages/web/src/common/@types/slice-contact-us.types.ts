export type SliceContactUsTypes = {
  status: null | `ok` | `failed`;
  stage: `idle` | `busy` | `failed`;
  message: null | string;
};

export type ContactFormResponse = {
  data: { status: string; message: string };
};
