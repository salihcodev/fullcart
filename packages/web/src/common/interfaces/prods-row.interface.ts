import { ProdTypes } from '../@types/prod.types';

export interface IProdsCategoryCollection {
  stage: string;
  prods: ProdTypes[];
  collectionName: string;
  showPagination?: boolean;
}
