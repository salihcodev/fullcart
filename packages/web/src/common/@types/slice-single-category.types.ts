import { ProdTypes } from './prod.types';

export type SliceSingleCategoryTypes = {
  prod: null | ProdTypes;
  stage: `idle` | `busy` | `failed`;
  failureMsg: null | string;
};
