import { User } from ".";

export type Order = "asc" | "desc";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof User;
  label: string;
  numeric: boolean;
}
