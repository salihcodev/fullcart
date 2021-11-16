export interface IAppButton {
  loadState?: string;
  path?: string;
  value: any;
  type: `button` | `submit` | `reset`;
  wide: boolean;
  size: `sm` | `md` | `lg`;
  border: { size: number; color?: string };
  bkgDefault?: boolean;
  bkgSecondary?: boolean;
  handleEvent?: any;
  noBorder: boolean;
  icon?: any;
  isIconBefore?: boolean;
  openDetachedly?: boolean;
}
