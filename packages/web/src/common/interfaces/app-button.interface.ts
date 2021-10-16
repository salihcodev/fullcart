export interface IAppButton {
  loadState?: string;
  path?: string;
  value: string;
  type: `button` | `submit` | `reset`;
  wide: boolean;
  size: `sm` | `md` | `lg`;
  border: { size: number; color?: string };
  handleEvent?: any;
}
