import { LoadStateTypes } from './load-state.types';

export type SliceContactUsTypes = {
  status: null | `ok` | `failed`;
  stage: LoadStateTypes;
  message: null | string;
};

export type ContactFormResponse = {
  data: { status: string; message: string };
};
