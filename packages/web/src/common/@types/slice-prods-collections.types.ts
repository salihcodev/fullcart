import { FurnitureProdTypes } from './prods.types';

export type SliceFurnitureTypes = {
  prods: null | FurnitureProdTypes[];
  stage: `idle` | `busy` | `failed`;
  failureMsg: null | string;
};
