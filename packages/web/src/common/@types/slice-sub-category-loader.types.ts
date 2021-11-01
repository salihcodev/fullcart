import { ProdTypes } from './prod.types';

export type SliceSubCategoryLoaderTypes = {
  prods: null | ProdTypes[];
  stage: `idle` | `busy` | `failed`;
  failureMsg: null | string;
};
