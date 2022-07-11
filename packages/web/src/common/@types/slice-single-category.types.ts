import { LoadStateTypes } from './load-state.types';
import { ProdTypes } from './prod.types';

export type SliceSingleCategoryTypes = {
  prod: null | ProdTypes;
  count: number;
  stage: LoadStateTypes;
  failureMsg: null | string;
};
