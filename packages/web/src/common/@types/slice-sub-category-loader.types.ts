import { LoadStateTypes } from './load-state.types';
import { ProdTypes } from './prod.types';

export type SliceSubCategoryLoaderTypes = {
  prods: null | ProdTypes[];
  stage: LoadStateTypes;
  failureMsg: null | string;
};
