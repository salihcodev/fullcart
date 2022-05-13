import { ProdTypes } from '../@types/prod.types';

export interface IProdSmartCard {
  prod: ProdTypes | null;
  height?: string;
  forCart?: boolean;
  description?: string;
}
