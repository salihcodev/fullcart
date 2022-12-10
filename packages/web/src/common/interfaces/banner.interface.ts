export interface IBanner {
  view?: `simple` | `features` | `declaration`;
  heading?: string;
  description?: string;
  feats?: { heading: string; description: string }[];
  logo?: any;
  specialLink?: string;
  bkg?: any;
  declaration?: string;
  specialLinkTxt?: string;
}
