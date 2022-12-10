import { SupplerTypes } from './user.types';

export type ProdTypes = {
  name?: string;
  slug?: string;
  priceInDollar?: number;
  cover?: string;
  categoryName?: string;
  subcategoryName?: string;
  leadingTime: [{ dozensAmount: string; estimationTime: string }];
  basicLeadingTime: string;
  payment?: string;
  warranty?: number;
  warrantyIn?: string;
  style?: string;
  type?: string;
  isReadyToShip?: boolean;
  isFastToDispatch?: boolean;
  stock?: number;
  minimumOrder?: number;
  availableColors?: string[];
  dozensOffers?: { dozensAmount: string; dozenPrice: number }[];
  features?: string[];
  images?: string[];
  prodBasicInfo?: ProdBasicInfoTypes;
  deliveryPackage?: DeliveryPackageTypes;
  _id?: string;
  suppler?: SupplerTypes;
  count: number;
};

type ProdBasicInfoTypes = {
  model?: string[];
  priceIncludes?: string;
  mainMaterial?: string;
  handlePosition?: string;
  position?: string;
  transportPackage?: string;
  origin?: string;
  hsCode?: string;
  port?: string;
};

type DeliveryPackageTypes = {
  sellingUnits?: string;
  singlePackageSize?: string;
  singleGrossWeight?: string;
  packageType?: string;
};
