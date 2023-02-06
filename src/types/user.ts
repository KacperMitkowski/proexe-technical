import { Address } from ".";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}
