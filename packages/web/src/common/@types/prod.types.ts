export type ProdTypes = {
  productInfo?: prodInfoTypes;
  priceIncludes?: string;
  mainMaterial?: string;
  surfaceFinishing?: string;
  handlePosition?: string;
  position?: string;
  leadingTime?: string;
  transportPackage?: string;
  origin?: string;
  hsCode?: string;
  _id?: string;
  name?: string;
  slug?: string;
  price?: number;
  cover?: string;
  port?: string;
  payment?: string;
  afterSales?: string;
  warranty?: number;
  style?: string;
  type?: string;
  features?: [string];
  images?: [string];
  createdAt?: string;
};

type prodInfoTypes = { modelNumber: string; availableColors: [string] };
