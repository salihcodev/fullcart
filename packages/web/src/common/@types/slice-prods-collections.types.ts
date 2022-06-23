import { ProdTypes } from './prod.types';

export type ProdsCollectionTypes = {
  prods: null | ProdTypes[];
  subProds: any;
  stage: `idle` | `busy` | `failed`;
  failureMsg: null | string;
};
