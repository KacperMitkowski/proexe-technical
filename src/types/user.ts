import { Address } from ".";

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  address: Address;

  constructor() {
    this.name = "";
    this.username = "";
    this.email = "";
    this.city = "";
  }
}
