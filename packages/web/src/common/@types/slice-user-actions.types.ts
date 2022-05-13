import { LoadStateTypes } from './load-state.types';
import { SupplerTypes } from './user.types';

export type SliceUserActionsTypes = {
  userData: null | SupplerTypes;
  stage: LoadStateTypes;
  failureMsg: null | string;
};
