import { AuthedUser } from './auth.type';
import { LoadStateTypes } from './load-state.types';

export type SliceAuthStateTypes = {
  user: null | AuthedUser;
  accessToken: null | string;
  stage: LoadStateTypes;
  failureMsg: { title?: string | null; msg?: string | null };
};
