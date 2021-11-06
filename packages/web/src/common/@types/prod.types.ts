export type ProdTypes = {
  name?: string;
  slug?: string;
  priceInDollar?: number;
  cover?: string;
  port?: string;
  category?: string;
  subCategory?: any;
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
  productInfo?: prodInfoTypes;
  deliveryPackage?: deliveryPackageTypes;
  _id?: string;
  suppler?: any;
};

type prodInfoTypes = {
  model?: string[];
  priceIncludes?: string;
  mainMaterial?: string;
  handlePosition?: string;
  position?: string;
  transportPackage?: string;
  origin?: string;
  hsCode?: string;
};

type deliveryPackageTypes = {
  sellingUnits?: string;
  singlePackageSize?: string;
  singleGrossWeight?: string;
  packageType?: string;
};
