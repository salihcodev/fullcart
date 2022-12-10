export type SupplerTypes = {
  _id?: string;
  role?: string;
  name?: string;
  email?: string;
  companyName?: string;
  countryCode?: string;
  region?: string;
  country?: string;
  specialization?: string;
  images?: string[];
  totalEmployees?: number;
  businessType?: string;
  yearEstablished?: number;
  certifications?: string;
  productCertifications?: string;
  patents?: string;
  trademarks?: string;
};

export type CustomerTypes = {
  _id?: string;
  name?: string;
  email?: string;
};
