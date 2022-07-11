import { LoadStateTypes } from './load-state.types';
import { ProdTypes } from './prod.types';

export type ProdsCollectionTypes = {
  prods: null | ProdTypes[];
  subProds: any;
  stage: LoadStateTypes;
  failureMsg: null | string;
};
