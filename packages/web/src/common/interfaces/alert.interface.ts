export interface IAlert {
  type: string;
  title?: null | string | undefined;
  msg?: null | string | undefined;
  authWarning?: boolean;
}
