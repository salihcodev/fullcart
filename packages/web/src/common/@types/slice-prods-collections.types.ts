import { ProdTypes } from './prod.types';

export type SliceFurnitureTypes = {
  prods: null | ProdTypes[];
  results: null;
  stage: `idle` | `busy` | `failed`;
  failureMsg: null | string;
};
