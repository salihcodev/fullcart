import { AuthedUser } from './auth.type';

export type SliceAuthStateTypes = {
  user: null | AuthedUser;
  accessToken: null | string;
  stage: `idle` | `busy` | `rejected`;
  failureMsg: { title?: string | null; msg?: string | null };
};
