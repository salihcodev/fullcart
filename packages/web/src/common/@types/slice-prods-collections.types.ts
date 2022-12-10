import { LoadStateTypes } from './load-state.types';
import { ProdTypes } from './prod.types';

export type ProdsCollectionTypes = {
  prods: ProdTypes[];
  stage: LoadStateTypes;
  failureMsg: null | string;
  count: null | number;
};
